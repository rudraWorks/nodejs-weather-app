const path=require('path')
const express=require('express')
const hbs=require('hbs')
const tempModulue=require('./temperature.js')
const fs=require('fs')

hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});
const app=express() 
const port=process.env.PORT || 3000

const staticPath=path.join(__dirname,'../public')
const partialsPath=path.join(__dirname,'../templates/partials')
const viewsPath=path.join(__dirname,'../templates/views')

app.set('view engine','hbs') 
app.set('views',viewsPath)
app.use(express.static(staticPath))
hbs.registerPartials(partialsPath)

app.get('/',(req,res)=>{ 

    return res.render('index')
    return res.render('index')
  //  return res.send('hi')
});


app.get('/submit_form',(req,res)=>{
    // return res.send(  req.query  )
    let address=req.query.address
    fs.appendFileSync(path.join(__dirname,'../public/txt/names.txt'),'\n'+address+'')
    // console.log(address)
    tempModulue.temp(address,({temperature,img})=>{
        // console.log(temperature)
        if(temperature==undefined)
        return res.render('index',{notfine:true})
        return res.render( 'index',{location:address,temperature:temperature,img:img,fine:true} )
    })
     
})

app.get('/about',(req,res)=>{
    const data=fs.readFileSync(path.join(__dirname,'../public/txt/names.txt'))
    return res.render('about',{data:data})
})
app.get('/help',(req,res)=>{
    return res.render('help')
})
app.listen(port,()=>{
    console.log('listening on port '+port)
}) 

