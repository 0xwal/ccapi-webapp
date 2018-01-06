var contextMenuContainer = gui.context.contextmenuConsole;
var optionOf;
function initContext() {
    intiHandlers();
    document.oncontextmenu = function (e) {
        var target = e.target;
        if (target.localName !== 'li' && target.parentElement.id !== 'lstConsoles')
             return;
        e.preventDefault();
        optionOf = target;
        var pos = (getPosition(e));
        showContext(pos.x, pos.y);

    };
};

function showContext(x, y) {
    var contextElementContainer = contextMenuContainer,
        contextElement = contextElementContainer.firstElementChild;
    contextElement.style.left = x + 'px';
    contextElement.style.top = y + 'px';
    if (contextElementContainer.onclick == null) {
        contextElementContainer.onclick = function() {
            hideElements(contextElementContainer);
        }
    }
    showElements(contextElementContainer);

}

function intiHandlers() {
    var btnConnect = gui.context.btnConnect;

    btnConnect.onclick = function() {

        var consoleDetails = getConsoleDetails();
        window.selectedConsole = consoleDetails.ip;
    }
}

function getConsoleDetails() {
     var targetConsole = optionOf,
            consoleData = targetConsole.innerHTML.split(':'),
            consoleName = consoleData[0],
            consoleIp = consoleData[1].trim();

    return {
        name: consoleName,
        ip: consoleIp
    };
}
function getPosition(e) {
    //Credits go to Nick Salloum, sitepoint.com
    var posx = 0;
    var posy = 0;

    if (!e) var e = window.event;

    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    }

    return {
        x: posx,
        y: posy
    }
}

