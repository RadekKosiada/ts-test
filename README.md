# TS Recruitment Test 

I created a single page application to consume API from SpaceX.

### Two solutions

- first one with plain JavaScript (master branch);
- second one with Vue.js (vue-solution branch);

### Basic CSS styling

I added some basic CSS styling to better differentiate them from one another  i. e. :

- different fonts, backgrounds, layout;
- on 'master' I use CSS grid, and a simple hover effect on image; 
- on 'vue-solution' I display all rockets by defining them as 'inline-block' elements; 

Please see respective screen shots on both branches.

[master]: https://www.screencast.com/t/PLToUuQq	"master"
[vue-solution]: https://www.screencast.com/t/3ayXa3Mb5	"vue-solution"


### Images

Apart from the required information I also added images of each launch;

When analyzed the data, I realized not all launches have images included, so I handled this edge case by displaying a default SVG icon, if necessary. 

### Alternative versions

Both solutions can be easily adjusted to display more launches.

##### Master

the Immediately Invoked Function Expression could be easily replaced by simple

```
function getRockets(number) {
.
.
 if (counter === number) {
	break;
	}
.
.
}
```

and the function can be called 

```
getRockets(3);
```

'Number' could be passed as argument and the function would render as many rockets as we want.
The edge-case would need to be addressed when the number passed is higher than the amount of available rockets from the API i. e. a warning or an error message;

##### Vue-solution

Since the  limitNumber is defined in the Vue data object it could be adjusted i. e. with an additional input in which user types a number; Similarly as in plan JS an error message might needed to be added.

```
var app = new Vue({
  el: '#app',
  data: {
    //defining an empty array to push most recent launches
    lastLaunches: [],
    //defining how many launches we want to display
    limitNumber: 3,
    counter: 0
  },
```







