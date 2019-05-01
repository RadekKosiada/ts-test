
(function () {
    //defining an empty array to push latest launches
    let latestLaunchesArr = [];
    fetch("https://api.spacexdata.com/v3/launches/past")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            //counter to limit the launches
            let counter = 0;
            //looping through the data array, backwards as we want the latest (last) launches
            for (let i = data.length - 1; i >= 0; i--) {
                //using push method to add the latest launches to the array
                latestLaunchesArr.push(data[i]);
                // with each push we increase counter by 1
                counter++;
                //we break out of the for loop, when the counter equals 3
                if (counter === 3) {
                    break;

                }
            }
            // - Mission Name, Year, Date, Rocket Name and Type, Launch Site
            for(let i = 0; i <latestLaunchesArr.length; i++) {
                let rocketImg = document.createElement('img');
                rocketImg.setAttribute("src", latestLaunchesArr[i].links.flickr_images[0]);
                document.body.appendChild(rocketImg);

                let missionName = document.createElement('p');
                missionName.innerHTML = "<span class='title'>Mission Name: </span>" + latestLaunchesArr[i].mission_name;
                document.body.appendChild(missionName);
               
                let launchYear = document.createElement('p');
                launchYear.innerHTML = "<span class='title'>Launch Year: </span>" + latestLaunchesArr[i].launch_year;
                document.body.appendChild(launchYear);

                let launchDate =  latestLaunchesArr[i].launch_date_local.slice(0, 10);
                let launchDateHtml = document.createElement('p');
                launchDateHtml.innerHTML = "<span class='title'>Date: </span>" + launchDate;
                document.body.appendChild(launchDateHtml);

                let rocket = document.createElement('p');
                rocket.innerHTML = "<span class='title'>Rocket Name: </span>" +  latestLaunchesArr[i].rocket.rocket_name + " <span class='title'>Type: </span>" +  latestLaunchesArr[i].rocket.rocket_type;
                document.body.appendChild(rocket);
               
                let launchSite = document.createElement('p');
                launchSite.innerHTML = "<span class='title'>Launch Site: </span>" + latestLaunchesArr[0].launch_site.site_name_long;
                document.body.appendChild(launchSite);
            }
            

            
            console.log(
                latestLaunchesArr[0],
                latestLaunchesArr[0].mission_name,
                latestLaunchesArr[0].launch_year,
               
                latestLaunchesArr[0].rocket.rocket_name,
                latestLaunchesArr[0].rocket.rocket_type,
                latestLaunchesArr[0].launch_site.site_name_long,
                latestLaunchesArr[0].links.flickr_images[0]
                )
        })
        .catch(function (err) {
            console.log(err.message);
        });
})();



