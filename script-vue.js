var app = new Vue({
  el: '#app',
  data: {
    lastLaunches: [],
    limitNumber: 3,
    counter: 0,

  },
  mounted() {
    axios
      .get('https://api.spacexdata.com/v3/launches/past')
      .then(response => {
        console.log("OK", response.data);
        for (let i = response.data.length - 1; i >= 0; i--) {
          this.lastLaunches.push(response.data[i]);
          this.counter++;
          if (this.counter == this.limitNumber) {
            break;
          }
          
        }
      })
      .catch(function (err) {
        console.log(err.message);
      });
  }
})