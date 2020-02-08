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