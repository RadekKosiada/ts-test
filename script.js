fetch("https://api.spacexdata.com/v3/launches/past")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(JSON.stringify(data));
    })
    .catch(function(err) {
        console.log(err.message);
    });

