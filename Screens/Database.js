import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'test.db' });
export const init = ()=>{
    db.transaction(function(txn) {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='fav'",
          [],
          function(tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
              txn.executeSql('DROP TABLE IF EXISTS fav', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS fav(id INTEGER PRIMARY KEY AUTOINCREMENT, category VARCHAR(100), body VARCHAR(1000), by VARCHAR(255))',
                []
              );
            }
          }
        );
      });
}
export const initAgain = ()=>{
    db.transaction(function(txn) {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='setting'",
          [],
          function(tx, res) {
            console.log('Table Exists:', res.rows.length);
            if (res.rows.length == 0) {
              txn.executeSql('DROP TABLE IF EXISTS fav', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS setting(id INTEGER PRIMARY KEY AUTOINCREMENT, notifications VARCHAR(100))',
                []
              );
              db.transaction(function(tx) {
                tx.executeSql(
                  'INSERT INTO setting ( notifications) VALUES (?)',
                  ["English"],
                  (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                       console.log("Inserted");
                    } else {
                     console.log("Error in Inserting Data");
                    }
                  }
                );
              });

            }
           
          }
        );
        
      });
     
}