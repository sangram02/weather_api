 const cityname = document.getElementById('cityname');
 const submitBtn = document.getElementById('submitBtn');
 const city_name = document.getElementById('city_name')
 const temp_status = document.getElementById('temp_status');
 const temp_val = document.getElementById('temp_val');
 const datahide = document.querySelector('.middle_layer')
 const getInfo = async(event) =>{
    event.preventDefault();
    const cityval = cityname.value;
    if(cityval == ""){
        city_name.innerText = "Plz write the name before search"
        datahide.classList.add('data_hide');
    }
    else{
        try{
            // const cityval = cityname.value;
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=d2ee041624520e4bd81945e70f3b6a6b`
        const response = await fetch(url);
        const data = await response.json();
        const arrdata = [data];
        city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
        temp_val.innerHTML = arrdata[0].main.temp;
        temp_status.innerHTML = arrdata[0].weather[0].main;

         //condition to check weather
         if(temp_status == "Clear"){
            temp_status.innerHTML = "<i class='bi bi-brightness-high-fill' style='color: #eccc68;'></i>";
         }
         else if(temp_status == "Clouds"){
            temp_status.innerHTML = "<i class='bi bi-cloud-fill' style='color: #009ad8;'></i>";
         }
         if(temp_status == "Rain"){
            temp_status.innerHTML = "<i class='bi bi-cloud-drizzle-fill' style='color: #009ad8;'></i>";
         }
         else{
            temp_status.innerHTML = "<i class='bi bi-cloud-fill' style='color: #f1f2f6;'></i>";
         }
         datahide.classList.remove('data_hide');
        }
        
        catch{
            city_name.innerText = "Plz write the correct name before search" 
            datahide.classList.add('data_hide');
        }
    }
 }
 submitBtn.addEventListener('click',getInfo);