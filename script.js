fetch("https://api.spacexdata.com/v3/launches/past")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(JSON.stringify(data[76]));
    })
    .catch(function(err) {
        console.log(err.message);
    });

fetch("https://api.spacexdata.com/v3/launches/latest")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(JSON.stringify(data));
    })
    .catch(function(err) {
        console.log(err.message);
    });

