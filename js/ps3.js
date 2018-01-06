function request(requestOpt, callBack) {
    "use strict";
    const xhr = new XMLHttpRequest();
    const url = typeof requestOpt === "string" ? requestOpt : requestOpt.url;
    const headers = requestOpt.hasOwnProperty("headers") ? requestOpt.headers : {};
    const method = requestOpt.hasOwnProperty("method") ? requestOpt.method : "GET";
    const data = requestOpt.hasOwnProperty("data") ? requestOpt.data : null;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4)
        {
            callBack(this);
            console.log(xhr.getAllResponseHeaders());
        }
    };
    xhr.open(method, url);
    for(let index in headers)
    {
        if(headers.hasOwnProperty(index))
        {
            xhr.setRequestHeader(index, headers[index]);

        }
    }
    //xhr.setRequestHeader("Host", "http://localhost");
    //xhr.setRequestHeader("Origin", "http://localhost");
    xhr.send(data);
}
function get(url, headerObject ,callBack) {
    "use strict";
    request({url: url, headers: headerObject}, callBack);
}

function ccapi() {
    get("http://"+window.selectedConsoleIP+":6333/ccapi/"+command, null, function (e) {
       console.log(e);
    });
}

function ringBuzzer(type) {
    ccapi("ringbuzzer?type=" + type);
}
function notify(icon, msg) {
    ccapi("notify?msg=" + msg + "&id=" + icon);
}
function getProcessList() {
    ccapi("getprocesslist");
}
