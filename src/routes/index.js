const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index.html',{title: '¿Por qué estamos juntos?'});
});

router.get('/amor',(req,res)=>{
    res.render('amor.html',{title: 'Amarte menos es imposible'});
});

router.get('/felicidad',(req,res)=>{
    res.render('felicidad.html',{title: 'Nos merecemos lo mejor'});
});


router.get('/futuro',(req,res)=>{
    res.render('futuro.html',{title: 'Nos merecemos lo mejor'});
});
 module.exports = router;