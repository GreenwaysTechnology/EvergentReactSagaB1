const mongojs = require('mongojs')
//get the database
const db = mongojs('BooksDb')
//get the table
const books = db.collection('books')

class BooksService {
    findAll() {
        return new Promise((resolve, reject) => {
            db.books.find(function (error, docs) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(docs);
                }
            });
        });

    }
}

module.exports = new BooksService();