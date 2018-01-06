function include(file){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = file;
    document.body.appendChild(script);
}


include('js/global.js');
include('js/storage.js');
include('js/var.js');
include('js/contextmenu.js');
include('js/main.js');