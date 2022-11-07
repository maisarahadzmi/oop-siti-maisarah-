function buttonClicked(){
    //const cityForm  = document.querySelector("#foodForm")
    //const getWeatherConditions = async(city) => {
    country=document.getElementById("country").value
    variety=document.getElementById("variety").value

    fetch (`http://universities.hipolabs.com/search?name=${variety}&country=${country}`)
        .then (response => response.json())
        .then (data =>{
            var info = data
               console.log(info)

        //chooserandomuni

        var total = data.length 
                var random = [];
                for(var i = 0;i<total ; i++){
                    var temp = Math.floor(Math.random()*total);
                    if(random.indexOf(temp) == -1){
                        random.push(temp);
                    }
                    else
                    i--;
                }

        //Declare for each institute
         var uni0 = data[random[0]].name;
         var uni1 = data[random[1]].name;
         var uni2 = data[random[2]].name;
         var uni3 = data[random[3]].name;
         var uni4 = data[random[4]].name;

         var linkweb0 = data[random[0]].web_pages[0];
         var linkweb1 = data[random[1]].web_pages[0];
         var linkweb2 = data[random[2]].web_pages[0];
         var linkweb3 = data[random[3]].web_pages[0];
         var linkweb4 = data[random[4]].web_pages[0];
        

        document.querySelector(".uni0").innerText = uni0;
        document.querySelector(".uni1").innerText = uni1;
        document.querySelector(".uni2").innerText = uni2;
        document.querySelector(".uni3").innerText = uni3;
        document.querySelector(".uni4").innerText = uni4;

        document.querySelector(".linkweb0").innerText = linkweb0;
        document.querySelector(".linkweb1").innerText = linkweb1;
        document.querySelector(".linkweb2").innerText = linkweb2;
        document.querySelector(".linkweb3").innerText = linkweb3;
        document.querySelector(".linkweb4").innerText = linkweb4;
            
    });
}