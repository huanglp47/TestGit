var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
//var Movie = require('./models/movie');
//var bodyParser = require('body-parser');
//var _ = require('underscore');

var app = express();
var port = process.env.PORT ||3000;

app.set('views', './views/pages');
app.set('view engine', 'jade');
//app.use(bodyParser());
//app.use(express.static(path.join(__dirname, 'bower_components')))

app.listen(port);
console.log('imooc started on port '+port);


// index page
app.get('/',function(req,res){
    res.render('index',{
        title: 'imooc 棣栭〉',
        movies:[{
            title:'鏈潵鎴樿',
            _id: 1,
            poster:'https://www.baidu.com'
        },
        {
            title:'鏈潵鎴樿',
            _id: 1,
            poster:'https://www.baidu.com'
        },
        {
            title:'鏈潵鎴樿',
            _id: 1,
            poster:'https://www.baidu.com'
        }]
    });
})

// detail page
app.get('/movie/:id', function (req, res) {
    res.render('detail',{
        title: 'imooc 璇︽儏椤�'
    });
});

// admin page
app.get('/admin/movie', function (req, res) {
    res.render('admin',{
        title: 'imooc 鍚庡彴褰曞叆椤�'
    });
});

// list page
app.get('/admin/list', function(req, res){
    res.render('list', {
        title: 'imooc 鍒楄〃椤�'
    });
});