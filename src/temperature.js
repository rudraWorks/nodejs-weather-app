
const request=require('request')



function data(address,callback)
{
    url='http://api.weatherstack.com/current?access_key=fa4777a108f59b36e1d78bb767f2add6&query='+address
    request({url:url,json:true},(error,response)=>{
        
        console.log(error);
        if(error)
        {
            callback('unable to connect!')
        }
        else if(response.body.success===false) 
        callback('bad location!') 
        
        else callback({temperature:response.body.current.temperature,img:response.body.current.weather_icons})
    })
}
var p="rudra" 
module.exports={temp:data,j:p}