var createDB = async function(dbName, version) {
    return new Promise(function(resolve, reject) {
		var db;
        try {
            var request = window.indexedDB.open(dbName, version);
            request.onerror = function(event) {
                console.log("Why didn't you allow my web app to use IndexedDB?!", event);
                };
            request.onsuccess = function(event) {
				db = event.target.result;
				resolve('database created', db);
				return db;
            };
        } catch(error) {
            console.log('error: ', error.stack);
            reject('failed loading db');
		}
    });
}

var createObj = async function(dbName, version, storeName) {
	return new Promise(function(resolve) {
		console.log('in createObj');
		var request = indexedDB.open(dbName);
		request.onsuccess = function (e){
			var database = e.target.result;
			console.log('onsuccess in createObj');
			database.close();
			console.log('database closed');
			var secondRequest = indexedDB.open(dbName, version + 1);
			console.log('secondRequest done');
			secondRequest.onupgradeneeded = function (e) {
				var database = e.target.result;
				console.log('onupgradeneeded');
				var objectStore = database.createObjectStore(storeName, {
					keyPath: 'id'
				});
				console.log(objectStore);
				resolve('yes');
			};
		}
    });
}

module.exports = {
	createDB,
	createObj
}
