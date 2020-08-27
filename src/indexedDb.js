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
					autoIncrement: true
				});
				
				objectStore.createIndex("Patient", "Patient", { unique: true });
				
				console.log(objectStore);
				resolve('yes');
			};
		}
    });
}

var addData = async function(data, dbName, version) {
	version++;
	var DBOpenRequest = window.indexedDB.open(dbName, version);
	DBOpenRequest.onsuccess = function(event) {
		console.log(event, 'connected db in addData()');
		let db = DBOpenRequest.result;
		let transaction = db.transaction(['PatientInfo'], "readwrite");
		transaction.oncomplete = function(event) {
			console.log(event, 'transaction completed');
		};
		transaction.onerror = function(event) {
			console.log(event, 'error in addData() transaction');
			console.log('transaction error occured');
		}
		var objectStore = transaction.objectStore("PatientInfo");
		var objectStoreRequest = objectStore.add(data);
		objectStoreRequest.onsuccess = function(event) {
			console.log(event, 'added');
		};
	}	
}

module.exports = {
	createDB,
	createObj,
	addData
}
