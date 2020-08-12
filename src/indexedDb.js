var createDB = function(dbName, version) {
    return new Promise(function(resolve, reject) {
        console.log('version: ', version);
        try {
            var db;
            var request = window.indexedDB.open(dbName);
            request.onerror = function(event) {
                console.log("Why didn't you allow my web app to use IndexedDB?!", event);
                };
            request.onsuccess = function(event) {
                db = event.target.result;
                console.log('db: ', db);
                resolve('database created')
            };
        } catch(error) {
            console.log('error: ', error.stack);
            reject('failed loading db');
        }
    });
}

module.exports = {
    createDB,
}
