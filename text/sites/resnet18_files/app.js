
var clog = function(){
    window.dd && console.log.apply(window, arguments);
};

var cdir = function(){
    //
};


function getXPathForElement(element) {
    const idx = (sib, name) => sib ?
        idx(sib.previousElementSibling, name || sib.localName) + (sib.localName == name) :
        1;
    const segs = elm => !elm || elm.nodeType !== 1 ? [''] :
        elm.id && document.querySelector(`#${elm.id}`) === elm ? [`id("${elm.id}")`] : [...segs(elm.parentNode), `${elm.localName.toLowerCase()}[${idx(elm)}]`];
    return segs(element).join('/');
}

function getElementByXPath(path) {
    return (new XPathEvaluator()).evaluate(path, document.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function getElementByXPathExt(doc, path) {
    return (new XPathEvaluator()).evaluate(path, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


// создаём модуль
(function() {


    let _editor = this;


    function isAllowEdit(targetElement, zzz=true) {
        
		if (!$(targetElement).is(window.matlab_corrections_selectors))
		//if (["P", "H1", "H2", "H3"].indexOf(targetElement.tagName) == -1)
		{
            
            //if (isAllowEdit)
            
            //if (targetElement.parentNode != null && targetElement.parentNode != undefined) {
            //    return isAllowEdit(targetElement.parentNode, );
            //}
            
            return false;
        }
        let len = targetElement.textContent.length;
        if (len < 4) {
            return false;
        }
        return true;
    }


    function isElementInClass(element, className) {
        return $(element).parents().hasClass(className);
    }


    let updateHiddenDOM = function() {
        $.ajax({
            url : '/showEngPage?page=' + encodeURIComponent(window.matlab_eng_page)
        }).done(function(data) {
            _editor.hiddenDOM = new DOMParser().parseFromString(data, "text/html");
            clog("Hidden DOM is loaded!");
        });
    }


    let saveChanges = function(data) {
        $.post(window.matlab_api_page, data, function(data) {
            clog(data);
        });
    };

    let wrapForMarks = window.wrapForMarks;
    let unwrapForMarks = window.unwrapForMarks;


    let getOriginalText = function(elem)
    {
        let xpath = getXPathForElement(elem);
        clog(xpath);

        if (xpath == "") {
            clog("empty xpath!");
            return;
        }

        let enElem = getElementByXPathExt(_editor.hiddenDOM, xpath);
        return enElem.innerHTML;
    };

    let isChildOfParent = function (child, parent) {
        let _parent = child;
        for (let deep=0; deep < 100; deep++) {
            if (_parent === parent) return true;
            _parent = _parent.parentNode;
            if (_parent === null) break;
            if (parent === null) break;
        }
        return false;
    }


    let showTooltip = function(elem, el, doNothing) {

        if (doNothing === true) {
            clog("do nothing");
            return; // для отмены событий
        }

        if (_editor.activeElement !== null) {
            clog("editing mode");
            return;
        }

        if (elem !== _editor.tooltipElement) {
            $(_editor.tooltipElement).protipHide();
        }


        // если элемент можно редактировать - продолжаем
        if (!isAllowEdit(elem)) return;

        let tt_eng = getOriginalText(elem);
        let tt_btn = '<div id="fastEdit_bwrapper" class="fastEdit_bwrap"><a onclick="window.tt_edit();">Предложить лучший вариант перевода</a></div>';

        let maxW = el.width();
        maxW = Math.max(maxW*0.9, 500);

        el.protipShow({
            trigger: 'sticky',
            title: "" + tt_eng + "<br>" + tt_btn,
            //size: 'small',
            width: maxW,
            position: 'top-left',
            gravity: 'top-left; bottom-left',
            animate: 'zoomIn',
            scheme: 'mystyle',
            //classes: 'form-helper-tooltip',
            qqqdelayIn: 2000
        });


        _editor.tooltipElement = elem;
        _editor.tooltipContent = tt_eng;
    };


    window.tt_edit = function()
    {
        let el = $(_editor.tooltipElement);
        el.attr("contenteditable", "true");
        el.removeClass("fastEdit_hover");
        el.addClass("fastEdit_active");

        

        _editor.activeElement = _editor.tooltipElement;
        _editor.activeElement.focus();
        _editor.elementOldContent = _editor.activeElement.innerHTML;

        wrapForMarks(_editor.activeElement);


        ///
        $(".fastEdit_bwrap").html('<a onclick="window.tt_save_tr(true);">Сохранить</a> &nbsp; &nbsp; <a onclick="window.tt_save_tr(false);">Отменить</a>');
        
        
        var top = $(_editor.activeElement).offset().top - $(window).scrollTop();
        var middle = $(window).height() / 2;
        var cls =  (top > middle-10) ? "pos_tl" : "pos_bl";
        
        //console.log(cls);
        $("#popupWithRules").removeClass("pos_tl");
        $("#popupWithRules").removeClass("pos_bl");
        $("#popupWithRules").addClass(cls);
        
        $("#popupWithRules").show();
    };

    window.tt_save_tr = function(isSave)
    {
        var xpath = getXPathForElement(_editor.activeElement);
        clog("save:", xpath);

        unwrapForMarks(_editor.activeElement);

        _editor.elementNewContent = _editor.activeElement.innerHTML;

        if (!isSave) _editor.activeElement.innerHTML = _editor.elementOldContent; // restore html

        if ( (_editor.elementNewContent !== _editor.elementOldContent) && isSave ) saveChanges({
            xpath: xpath,
            tooltip: _editor.tooltipContent,
            elementOldContent: _editor.elementOldContent,
            elementNewContent: _editor.elementNewContent,
            release_name : window.matlab_release_name,
            page_link : window.matlab_mark_page
        });

        


        let el = $(_editor.activeElement);
        el.removeAttr("contenteditable");
        el.removeClass("fastEdit_active");
        el.protipHide();

        _editor.activeElement = null;
        _editor.tooltipElement = null; // !!! иначе подсказака не всплывает на только что отредактированном элементе
        
        // попап с правилами
        $("#popupWithRules").hide();
    };


    let processOnClick = function(event) {
        let targetElement = event.target || event.srcElement;
        
        
        let isProtip = isElementInClass(targetElement, "protip-container");
        clog(isProtip);
        
        // скрываем тултип по клику вне тултипа
        if (!isProtip) {
            _editor.showTooltip(null, null, false);
            clog("no in tolltip");  
        }
        
        if (isProtip) return; // чтобы можно было править protip
        

        /*
        // если кликнули в другое место экрана - заканчиваем правку
        if (_editor.activeElement !== null && !isChildOfParent(targetElement, _editor.activeElement)    &&   false   )
        {
            var xpath = getXPathForElement(_editor.activeElement);
            clog("save:", xpath);

            _editor.elementNewContent = _editor.activeElement.innerHTML;

            if (_editor.elementNewContent !== _editor.elementOldContent) saveChanges({
                xpath: xpath,
                tooltip: _editor.tooltipContent,
                elementOldContent: _editor.elementOldContent,
                elementNewContent: _editor.elementNewContent,
                link : location.href
            });

            unwrapForMarks(_editor.activeElement);


            let el = $(_editor.activeElement);
            el.removeAttr("contenteditable");
            el.removeClass("fastEdit_active");
            el.protipHide();



            _editor.activeElement = null;

            _editor.tooltipElement = null; // !!! иначе подсказака не всплывает на только что отредактированном элементе

            return;

        }
        */


    };


    let processOnMouseEnter = function(event) {
        var targetElement = event.target || event.srcElement;
        
        if (isElementInClass(targetElement, "protip-container")) {
            _editor.showTooltipWithDelay(null, null, true);
            clog("in tolltip");
            return;
        }

        var el = $(targetElement);
        _editor.showTooltipWithDelay(targetElement, el);


        //clog("enter", targetElement);
        if (_editor.activeElement !== null) return;
        if (isAllowEdit(targetElement)) el.addClass("fastEdit_hover");

    }


    let processOnMouseLeave = function(event) {
        var targetElement = event.target || event.srcElement;

        if (_editor.activeElement !== null) return;
        var el = $(targetElement);
        el.removeClass("fastEdit_hover");

    }

    let applyCurrentEdits = function() {
        let edits = window.matlab_current_edits;
        for (var i=0; i < edits.length; i++) {
            var edit = edits[i];
            var elem = getElementByXPath(edit[0]);
            $(elem).html(edit[2]);

            clog("применили правку для" + edit[0]);
        }
    }

    let runOnScroll = function() { 
        _editor.showTooltipWithDelay({}, {}); // скроет скрол
    }


    

    _editor.hiddenDOM = null; // DOM модель с англоязычным документом
    _editor.activeElement = null;

    _editor.elementOldContent = "";
    _editor.elementNewContent = "";


    _editor.tooltipElement = null;
    _editor.tooltipContent = "";
    _editor.mouseOnTooltip = false;

    _editor.showTooltip = showTooltip;
    _editor.showTooltipWithDelay = debounce(_editor.showTooltip, window.matlab_tooltip_timeout);

    

    $(document).ready(function() {
        
        //setTimeout(function() {
            $("#loadingElement").css("display","none");
            //console.log(+new Date());
        //}, 3000);
        
        $("#docsearch_form").on('submit', function (e) {   
            if($("#docsearch").val().length > 2){ 
                return true;
            } else{ 
                alert('Введите больше двух знаков'); 
                return false;
            }
        });
        
        if (window.matlab_is_current_release) {
            try {
                $.protip();
            } catch (e) {
                console.log(e);
                //document.location.reload();
            }
			updateHiddenDOM();
			document.addEventListener("click", processOnClick);
			document.addEventListener("mouseover", processOnMouseEnter);
			document.addEventListener("mouseout", processOnMouseLeave);
            window.addEventListener("scroll", runOnScroll);
		}
        applyCurrentEdits();
		
		setTimeout( function(){
		clog(location);
		
		if (location.hash.indexOf("XPath") != -1) {
			var b64 = location.hash.substr(7);
			var oks = window.atob(b64);
			clog(b64, oks);
			
			var elema = getElementByXPath(oks);
			
			$('html, body').animate({
				scrollTop: $(elema).offset().top
			}, 800);
		}
		
		},100);

    });
    
    
}());
