
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
            //main div to nest content for styling and grid
            let mainContent = document.createElement("div");
            mainContent.setAttribute("id", "main-content")
            document.body.appendChild(mainContent);

            console.log(latestLaunchesArr[0]);

            // looping through all the launches
            for (let i = 0; i < latestLaunchesArr.length; i++) {
                // content units to display single launch, for styling
                let contentUnits = document.createElement("div");
                contentUnits.setAttribute("class", "rocket-units");
                mainContent.appendChild(contentUnits);

                // grabbing all single units in a variable, to loop through them as a NodeList and append each launch to single one of them
                let allContentUnits = document.querySelectorAll(".rocket-units");
                console.log(allContentUnits);

                // img div for styling
                let imgDiv = document.createElement("div");
                imgDiv.setAttribute("class", "img-div")
                allContentUnits[i].appendChild(imgDiv);

                // img tag   
                //if img available in the data - display image             
                if(latestLaunchesArr[i].links.flickr_images[0]) {
                    let rocketImg = document.createElement("img");
                    rocketImg.setAttribute("src", latestLaunchesArr[i].links.flickr_images[0]);
                    imgDiv.appendChild(rocketImg);
                //else use a backup icon
                } else {
                    let icon = document.createElement("div");
                    icon.setAttribute("class", "icon");
                    imgDiv.appendChild(icon);
                }
                
                

                // p tags with respective info
                let missionName = document.createElement("p");
                missionName.innerHTML = "<span class='title'>Mission Name: </span>" + latestLaunchesArr[i].mission_name;
                allContentUnits[i].appendChild(missionName);

                let launchYear = document.createElement("p");
                launchYear.innerHTML = "<span class='title'>Launch Year: </span>" + latestLaunchesArr[i].launch_year;
                allContentUnits[i].appendChild(launchYear);

                //cleaning the date
                let launchDate = latestLaunchesArr[i].launch_date_local.slice(0, 10);
                let launchDateHtml = document.createElement("p");
                launchDateHtml.innerHTML = "<span class='title'>Date: </span>" + launchDate;
                allContentUnits[i].appendChild(launchDateHtml);

                let rocket = document.createElement("p");
                rocket.innerHTML = "<span class='title'>Rocket Name: </span>" + latestLaunchesArr[i].rocket.rocket_name + " <span class='title'>Type: </span>" + latestLaunchesArr[i].rocket.rocket_type;
                allContentUnits[i].appendChild(rocket);

                let launchSite = document.createElement("p");
                launchSite.innerHTML = "<span class='title'>Launch Site: </span>" + latestLaunchesArr[0].launch_site.site_name_long;
                allContentUnits[i].appendChild(launchSite);
            }
        })
        .catch(function (err) {
            console.log(err.message);
        });
})();



