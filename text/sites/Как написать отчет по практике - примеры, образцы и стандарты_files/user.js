window.addEventListener('load', function (e) {
    var itEvent = document.createElement('div');
    itEvent.id = 'out-inner';
    itEvent = document.body.insertBefore(itEvent, document.body.firstChild);
    var url = '/resources/popup/popupform.aspx?wt_id='+work_type;
    $('#Popup-exit').load(url);
    ExitPopup(itEvent)
}, false);

function ExitPopup(elem)
{
	elem.addEventListener('mouseout', ShowPopup, false);
	console.log(111);
function ShowPopup(e){
	var isShow = sessionStorage.getItem('popupView');
	if (e.clientY > 0 || isShow == "yes") return;
	DisableEvent(elem);
   	$('#Popup-exit').foundation('reveal', 'open');
    
	}

function DisableEvent(elem) {
    elem.removeEventListener('mouseout', ShowPopup, false);
    sessionStorage.setItem('popupView', 'yes');
	}
}