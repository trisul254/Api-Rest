var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var avion  =  mongoose.model('avion');

module.exports = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
    avion.find( function (err,aviones) {
        if(err){
            res.status(400).send(err);
        }
        res.json(aviones);
    });
});

router.post('/',function (req,res) {
    var add_avion  = new avion(req.body);
    add_avion.save(function (err,avion) {
        if(err){
            console.log(req)
            res.status(400).send(err);
        }
        res.json(avion);
    });
});

router.get('/:avionid',function (req,res) {
    avion.findById(req.params.avionid, function (err,avion) {
        if (err){
            res.send(err);
        }
        res.json(avion);
    });
});

router.delete('/:avionid',function (req,res) {
    avion.remove({_id: req.params.avionid}, function (err,avionid) {
        if(err){
            res.send(err);
        }
        res.json(avionid);
    });
});

module.exports = router;

router.put('/:avionid',function (req,res) {
    avion.findOneAndUpdate({_id: req.params.avionid},req.body,{new: true},function (err,avion) {
        if (err){
            res.send(err);
        }
        res.json(avion);
    })
});