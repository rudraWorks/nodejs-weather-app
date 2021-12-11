// alert("hi");

let fetchRes = fetch(
    "http://api.weatherstack.com/current?access_key=fa4777a108f59b36e1d78bb767f2add6&query=delhi");
    
            // fetchRes is the promise to resolve
            // it by using.then() method
            fetchRes.then(res =>
                res.json()).then(d => {
                    console.log(d.current.temperature)
                })
