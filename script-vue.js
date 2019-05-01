var app = new Vue({
  el: '#app',
  data: {
    
  },
  mounted() {
    axios
      .get('https://api.spacexdata.com/v3/launches/past')
      .then(function(response){
        console.log("OK", response.data)
      })
      .catch(function(err) {
        console.log(err.message);
      });
    
  }
})