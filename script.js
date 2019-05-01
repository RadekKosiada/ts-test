
(function () {
    let latestLaunchesArr = [];
    fetch("https://api.spacexdata.com/v3/launches/past")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let counter = 0;
            for (let i = data.length-1; i >=0; i--) {  
                console.log(data.length)              
                latestLaunchesArr.push(data[i]);                
                counter++;
                if(counter==3) {
                    break;
                }
            }
            
        })
        .catch(function (err) {
            console.log(err.message);
        });

        console.log(latestLaunchesArr)  
})();


