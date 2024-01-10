var express=require('express');
const router = express.Router();
const movieController = require('../Controller/movieController');
router.get('/', movieController.getallmovies);//getallmovies
router.post('/',movieController.createMovie);//createmovie
router.get('/:id',movieController.getbyid)//getbyid
router.put('/:id', movieController.updateMovie);//updatemovie
router.delete('/:id', movieController.deleteMovie);//deletemovie
router.get('/list',movieController.moviesList);//movielistwithpagination
router.get('/listsort',movieController.sort);//movieslistwithpaginationandsort
router.get('/search/:title',movieController.searchbytitle)//searchbytitle
module.exports = router;