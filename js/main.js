function listAllConsoles()
{
    gui.main.lstConsoles.innerHTML = '';
    const allPS3s = consoles.getAll();
    for (var i = 0; i < allPS3s.length; i++) {
        const console = allPS3s[i];
        var ps3 = document.createElement('li');
        ps3.innerHTML = console.name + ": " + console.ip;
        gui.main.lstConsoles.appendChild(ps3);
    }
}
function tabControl()
{
    const tabNavigitorList = gui.main.tabControlNavigators,
        navContents = gui.main.tabContentsDiv,
        tabContents = gui.main.tabContents;
    hideElements(navContents);
    for (var i = 0; i < tabNavigitorList.length; i++)
    {
        const index = i;
        const element = tabNavigitorList[i];
        element.onclick = function()
        {

            hideElements(navContents);
            removeClass(tabNavigitorList, 'active');
            var contentElement = navContents[index];
            element.classList.add('active');
            showElements(contentElement);
            addClass(element, 'active');
        };

    }
    showElements(navContents[0]);
    showElements(tabContents);

}
function fileMenuStrip()
{
    const fileBtn = gui.main.btnFile,
        fileMenuStrip = gui.main.menustripFile,
        mainNavBar = gui.main.navBar,
        openFormBtn = gui.main.btnOpenConsoleForm,
        newConsoleForm = gui.main.newConsoleForm;

    fileBtn.onmouseenter = function()
    {
        showElements(fileMenuStrip);
    };
    mainNavBar.onmouseleave = function()
    {
        hideElements(fileMenuStrip);
    };

    openFormBtn.onclick = function()
    {
        showElements(newConsoleForm);
        hideElements(fileMenuStrip);
    };
}
function newConsoleForm()
{
    const ncForm = gui.main.newConsoleForm,
     allCloseBtns = gui.nc.btnCloseList,
     okBtn = gui.nc.btnOk,
     txtIP = gui.nc.txtIP,
     txtName = gui.nc.txtName;

    var closeFunction = function(){
        hideElements(ncForm);
    };

    for (var i = 0; i < allCloseBtns.length; i++) {
        const element = allCloseBtns[i];
        element.onclick = closeFunction;
    }

    okBtn.onclick = function(){
        consoles.add(txtName.value, txtIP.value);
        listAllConsoles();
        hideElements(ncForm);
    }
}

function main()
{
    listAllConsoles();
    tabControl();
    fileMenuStrip();
    newConsoleForm();
    initContext();
}
main();