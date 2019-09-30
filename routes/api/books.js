const express = require('express');
const router = express.Router();

// Loading a book model
const Book = require('../../models/Book');

//@route GET api/books/test
//@description tests books route
//@access Public
router.get('test', (req, res) => res.send('testing the book route...'));

//@route Get api/books
//@description Get all books
//@access Public
router.get('/', (req,res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({nobooksfound: 'No books found, sorry.'}));
});

//@route Get api/books/:id
//@description Get single book by id
// access Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({nobookfound: 'No Book was found, sorry'}));
});

//@route Get api/books
//@description add/save book
//access Public
router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({ msg: 'The book was successfully added'}))
        .catch(err => res.status(400).json({error: 'We are unable to add to this book'}));
});

//@route Get api/books/:id
//@description Update book
// @access Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({msg: 'Updated Successfully'}))
        .catch(err => res.status(400).json({error: 'Unable to update the database'})
        );
});

//@route GET api/books/:id
//@description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({mgs: 'Book entry was deleted successfully'}))
        .catch(err => res.status(404).json({error: 'No such a Book'}));
});

module.exports = router;