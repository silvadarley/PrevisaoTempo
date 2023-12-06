async function getPrevTemp(){
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

   
   try{
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
        // `https://api.open-meteo.com/v1/forecast?latitude=-23.0273553&longitude=-43.4658244&hourly=temperature_2m`
        );
    
        const data = await response.json();
        console.log(data);
        document.getElementById('resposta').innerHTML = "";
        
    
        for(let i = 0; 
            i < data.hourly.temperature_2m.length; 
            // i < 99;
            i++
            ){
            document.getElementById(
                'resposta'
            ).innerHTML += `<div>DATA: ${data.hourly.time[i]} - 
                            TEMPERATURA: ${data.hourly.temperature_2m[i]}ºC</div>`;
        }
    }catch (error){
        alert(error.message);
    }
}