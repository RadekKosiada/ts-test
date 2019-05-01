
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
                //we break the for loop, when the counter equals 3
                if (counter === 3) {
                    break;

                }
            }
            // - Mission Name, Year, Date, Rocket Name and Type, Launch Site

            let launchData =  latestLaunchesArr[0].launch_date_local.slice(0, 10);
            console.log(
                latestLaunchesArr[0],
                latestLaunchesArr[0].mission_name,
                latestLaunchesArr[0].launch_year,
                launchData,
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



