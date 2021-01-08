const api = {
  key:'your-api-key',
  call:'https://api.openweathermap.org/data/2.5/'
};

const https = require('https');

const weatherFetch = (city) =>{
  https.get(`${api.call}weather?q=${city}&units=metric&appid=${api.key}`,(resp)=>{
    resp.on('data',(d)=>{
      const weat = JSON.parse(d)
      weat.cod=="404"?console.log(weat.message):console.log(` Location: ${weat.name} \n Temperature: ${weat.main.temp}*C \n Env: ${weat.weather[0].description} \n Visibility: ${weat.visibility/1000}km`)
    })
  }

  ).on('error',(err)=>console.log(`Error: ${err}!`))
}

if(process.argv[2]=="weather"){
  console.log("Welcome to the weather-teller!!")
  weatherFetch(process.argv[3])
}
