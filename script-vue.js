var app = new Vue({
  el: '#app',
  data: {
    //defining an empty array to push most recent launches
    lastLaunches: [],
    //defining how many launches we want to display
    limitNumber: 3,
    counter: 0
  },
  mounted() {
    //using axios as an alternative for fetch
    axios
      .get('https://api.spacexdata.com/v3/launches/past')
      .then(response => {
        //for loop to get only most current launches
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