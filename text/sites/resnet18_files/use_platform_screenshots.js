/*global window, $, document */

function usePlatformScreenshots() {
    "use strict";
    var ua = window.navigator.userAgent,
        platformPattern = /\/examples\/(\w+)\/(glnxa64|maci64|win64)\//,
        platform = 'glnxa64';
    if (isFromMatlabOnline()) {
        platform = 'glnxa64';
    } else {
        if (ua.match(/Linux/)) {
            platform = 'glnxa64';
        } else if (ua.match(/Macintosh/)) {
            platform = 'glnxa64';
        }
    }

    $('img').each(function () {
        var img = $(this),
            src = img.attr('src');
        // make link absolute
        if (src.includes('R2020a_rus')) {
            // do nothing
        } else if (src.includes('../../examples/')) {
            src = src.replace('../../examples/', '/docs/R2020a/R2020a_rus/examples/');
        } else if (src.includes('../examples/')) {
            src = src.replace('../examples/', '/docs/R2020a/R2020a_rus/examples/');
        } else if (src.includes('/examples/')) {
            src = src.replace('/examples/', '/docs/R2020a/R2020a_rus/examples/');
        } else if (src.includes('/includes/product/images/')) {
            src = src.replace('/includes/product/images/', '/docs/R2020a/R2020a_rus/includes/product/images/');
        }
        src = src.replace(platformPattern, '/examples/$1/' + platform + '/');
        img.attr('src', src);
        if (img.parent('.card_media').length === 1) {
            var cardMediaDiv = img.parent('.card_media').first();
            var backgroundImgSrc = cardMediaDiv.css('background-image');
            // make link absolute
            if (backgroundImgSrc.includes('R2020a_rus')) {
                // do nothing
            } else if (backgroundImgSrc.includes('../../examples/')) {
                backgroundImgSrc = backgroundImgSrc.replace('../../examples/', '/docs/R2020a/R2020a_rus/examples/');
            } else if (backgroundImgSrc.includes('../examples/')) {
                backgroundImgSrc = backgroundImgSrc.replace('../examples/', '/docs/R2020a/R2020a_rus/examples/');
            } else if (backgroundImgSrc.includes('/examples/')) {
                backgroundImgSrc = backgroundImgSrc.replace('/examples/', '/docs/R2020a/R2020a_rus/examples/');
            } else if (backgroundImgSrc.includes('/includes/product/images/')) {
                backgroundImgSrc = backgroundImgSrc.replace('/includes/product/images/', '/docs/R2020a/R2020a_rus/includes/product/images/');
            }
            backgroundImgSrc = backgroundImgSrc.replace(platformPattern, '/examples/$1/' + platform + '/');
            cardMediaDiv.css('background-image', backgroundImgSrc);
        }
    });

}

$(document).ready(usePlatformScreenshots);

$(window).bind('examples_cards_added', function(e) {
   usePlatformScreenshots();
});

//from matlab_dialog.js

$(document).ready(function () {
    registerMatlabCommandDialogAction();
    registerOpenExampleAction();
    createMatlabModalWindow();
    translateSearchField();
    replaceLinks();
});

function registerOpenExampleAction() {
    var openExampleButtons = $('.examples_short_list a.btn[href^="matlab:"]');
    $.each(openExampleButtons, function() {
        var href = $(this).attr('href');
        addOpenExampleLinkClickHandler($(this));
        var matlabCommand = getMatlabCommand(href);
        var openWithCommand = getOpenWithCommand(matlabCommand);
        //if (window.ow !== undefined &&  openWithCommand) {
        if (openWithCommand) {
            //ow.doesExampleExist(openWithCommand, function (status) {
                var matlabLink = $('a[href="matlab:openExample(\'' + openWithCommand+ '\')"]');
                //if (status === 'true') {
                    matlabLink.html("Попробовать в MATLAB");
                    //matlabLink.addClass('visible-xs').css('display', 'inline-block');
                    //var dropDown = $('<div class="pull-right hidden-xs"><div class="btn-group"><button class="btn btn_color_blue dropdown-toggle dropdown-toggle" data-toggle="dropdown" href="#">Try This Example <span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-right"><li><a href="#" class="analyticsOpenWith">Try it in your browser</a></li><li><a href="#">Try it in MATLAB</a></li></ul></div></div>');
                    //$(matlabLink).parent().append(dropDown);
                    //$(dropDown).find("li:first a").on('click', function(e) {
                    //    e.preventDefault();
                    //    ow.startOpenWith(openWithCommand);
                    //    ow.loadExample(openWithCommand);
                    //});
                    $(matlabLink).on('click', function(e) {
                        e.preventDefault();
                        showMatlabDialog(matlabCommand);
                    });
                //} else {
                //    matlabLink.html("Try it in MATLAB");
                //    matlabLink.css('display', 'inline-block');
                //}
            //});
        } else {
            if (window.ow !== undefined) {
                $(this).html("Try it in MATLAB");
                $(this).css('display', 'inline-block');
            }
        }
    });
}

function addOpenExampleLinkClickHandler(link) {
    $(link).on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var matlabCommand = getMatlabCommand(href);
        showMatlabDialog(matlabCommand);
    });

}

$(window).bind('examples_cards_added', function(e) {
    $('.card_container a[href^="matlab:"]').hide();
});

function registerMatlabCommandDialogAction() {
    $('a[href^="matlab:"]').not('.card_container a[href^="matlab:"], .examples_short_list a.btn[href^="matlab:"]').on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var matlabCommand = getMatlabCommand(href);
        showMatlabDialog(matlabCommand);
    });
}

function getMatlabCommand(href) {
    var matlabCommand = null;
    var match = href.match(/matlab:(.*)/);
    if (match) {
        matlabCommand = match[1];
    }
    return matlabCommand;
}

function getOpenWithCommand(matlabCommand) {
    var openWithCommand = null;
    var match = matlabCommand.match(/openExample\('(.*)'\)/);
    if (match) {
        openWithCommand = match[1];
    }
    return openWithCommand;
}

function showMatlabDialog(matlabCommand) {
    if (matlabCommand) {
        $("#matlab-command-dialog #dialog-body #dialog-matlab-command").text(matlabCommand);
    } else {
        $("#matlab-command-dialog #dialog-body #dialog-matlab-command").hide();
    }
    $("#matlab-command-dialog").modal();
}

function createMatlabModalWindow() {
var matlab_modal = `
<div class="modal fade" id="matlab-command-dialog" tabindex="-1" role="dialog" aria-labelledby="matlabCommandDialogLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Закрыть"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Команда MATLAB</h4>
      </div>
      <div class="modal-body" id="dialog-body">
        <p>Вы щелкнули по ссылке, которая соответствует команде MATLAB: </p>
        <pre id="dialog-matlab-command"></pre>
        <p>Выполните эту команду, введя её в командном окне MATLAB.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn_secondary" data-dismiss="modal">Закрыть</button>
      </div>
    </div>
  </div>
</div
`;
var doc_center_content = document.getElementById("doc_center_content");
$(doc_center_content).append(matlab_modal);
};

function translateSearchField() {
var search_field = document.getElementById("docsearch");
search_field.placeholder = "Поиск в документации";
};

function replaceLinks() {
var pdf_link = document.getElementsByClassName("icon-file-pdf");
if (pdf_link.length == 1) {
    pdf_link[0].hidden = true;
}

var pdf_link_bottom = document.evaluate('//div[@class="body_trail_container"]//div[@class="col-xs-12"]/div/div/ul/li/a[contains(text(),"PDF")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (pdf_link_bottom != null) {
    pdf_link_bottom.parentElement.hidden = true;
}

var ml_answers = document.evaluate('//div[@class="body_trail_container"]//div[@class="col-xs-12"]/div/div[2]/ul/li[1]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (ml_answers != null) {
    ml_answers.href = "https://hub.exponenta.ru";
    ml_answers.text = "Сообщество Экспонента";
}

var support = document.evaluate('//div[@class="body_trail_container"]//div[@class="col-xs-12"]/div/div[2]/h5/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (support != null) {
    support.href = "https://exponenta.ru";
}

for (var li = 2; li < 6; li++) {
    var li_url = document.evaluate('//div[@class="body_trail_container"]//div[@class="col-xs-12"]/div/div[2]/ul/li['+li+']/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (li_url != null) {
        li_url.hidden = true;
    }
}

var learning = document.evaluate('//div[@class="col-xs-12 col-sm-4 col-lg-3"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (learning != null) {
    learning.hidden = true;
}

};