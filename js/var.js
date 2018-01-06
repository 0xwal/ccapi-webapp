const gui = {
    main: {
        navBar: getFirstElement('#navBar'),
        btnFile: getFirstElement('#btnFile'),
        menustripFile: getFirstElement('#menustripFile'),
        btnOpenConsoleForm: getFirstElement('#btnOpenConsoleForm'),
        lstConsoles: getFirstElement('#lstConsoles'),
        tabControlNavigators: getElements('#tabControl > ul li'),
        tabContentsDiv: getElements('#tabContents > div'),
        tabContents: getFirstElement('#tabContents'),
        newConsoleForm: getFirstElement('#newConsoleForm'),
        detailsTab: {
            consoleinfo: {
                lblFirmware: getFirstElement('#consoleinfo #lblFirmware'),
                lblCELLTemp: getFirstElement('#consoleinfo #lblCELLTemp'),
                lblCosnoleType: getFirstElement('#consoleinfo #lblCosnoleType'),
                lblRSXTemp: getFirstElement('#consoleinfo #lblRSXTemp'),
                btnRefresh: getFirstElement('#consoleinfo button')
            },
            consoleshutdown: {
                radio_shutdownmode: getElements('#consoleshutdown [name=radio_shutdownmode]'),
                btnExecute: getFirstElement('#consoleshutdown button')
            }

        },
        systemTab: {
            cosnoleleds: {
                radio_green: getElements('#cosnoleleds [name=radio_green]'),
                radio_red: getElements('#cosnoleleds [name=radio_red]'),
                btnSet: getFirstElement('#cosnoleleds button')
            },
            consolebuzzer: {
                radio_buzzermode: getElements('#consolebuzzer [name=radio_buzzermode]'),
                btnRingBuzzer: getFirstElement('#consolebuzzer button')
            },
            notify: {
                combo_icon: getFirstElement('#notify #combo_icon'),
                txtMessage: getFirstElement('#notify #txtMessage'),
                btnNotify: getFirstElement('#notify button')
            }
        },
        memoryTab: {
            combo_processand_kernal: getFirstElement('#memory #combo_processand_kernal'),
            txtOffset: getFirstElement('#memory #txtOffset'),
            txtInput: getFirstElement('#memory #txtInput'),
            combo_size: getFirstElement('#memory #combo_size'),
            btnRetrive: getFirstElement('#memory #processandkernal button'),
            btnPoke: getFirstElement('#memory #offset button')

        },
        consoleidsTab: {
            txtIdps: getFirstElement('#txtIdps'),
            btnSetCurrentIdps: getFirstElement('#btnSetCurrentIdps'),
            btnSetBootIdps: getFirstElement('#btnSetBootIdps'),
            txtPsid: getFirstElement('#txtPsid'),
            btnSetCurrentPsid: getFirstElement('#btnSetCurrentPsid'),
            btnSetBootPsid: getFirstElement('#btnSetBootPsid'),
            btnResetBootIdps: getFirstElement('#btnResetBootIdps'),
            btnResetBootPsid: getFirstElement('#btnResetBootPsid'),
            btnOFWMode: getFirstElement('#btnOFWMode')
        }
    },
    nc: {
        btnCloseList: newConsoleForm.getElements('.close'),
        btnOk: newConsoleForm.getFirstElement('#btnOk'),
        txtIP: newConsoleForm.getFirstElement('#txtIP'),
        txtName: newConsoleForm.getFirstElement('#txtName')
    },
    context: {
        contextmenuConsole: getFirstElement('#contextmenuConsole'),
        btnConnect: contextmenuConsole.getFirstElement('ul > li')
    }
};
var selectedConsoleIP;