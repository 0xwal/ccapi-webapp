var isStorageSupported = localStorage !== null;

if (!isStorageSupported){
    alert('localStorage must be supported/enabled to save and retrieve consoles');
}

var consoles = {
    add: function(name, ip){
       localStorage.setItem(name, ip);
    },
    delete: function(name){
        localStorage.removeItem(name);
    },
    getAll: function(){
        var data = localStorage;
        var outData = [];

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                outData.push({
                    name: key,
                    ip: element
                });
            }
        }
        return outData;
    },
    get: function(name){
        return localStorage.getItem(name)
    },
    length: localStorage.length
}