var isDone = false;
function isTrue()
{
	if (!isDone)
	{
		isTrue();
	}
	isDone = false;
}
function include(file, first = false){
	var doc = !first ? document.body : document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = file;
    doc.appendChild(script);
    script.onload = function(){
    	isDone = true;
    }
    isTrue();
}

include('js/global.js', true);
include('js/var.js');
include('js/storage.js', true);
include('js/contextmenu.js');
include('js/main.js');
