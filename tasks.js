const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

console.log("ervhebh")

const routes = {
    "/overview": "/task files/overview.html",
    "/lists": "lists.html",
    "/dashboard": "../taskfiles/dashboard.html",
    "/message": "../taskfiles/messages.html",
    "/files": "../taskfiles/files.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

var xValues = ["to-do","doing","done"];
var yValues = [4,0,0];
var barColors = ["#a69ff3"];

new Chart("barChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
      barThickness:40,
    //   labels:task-count
    }]
  },
//   options: {...}
});
var xValues = ["to-do","doing","done"];
var yValues = [4,0,0];
var barColors = ["#a69ff3"];

new Chart("doughnutchart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
//   options: {...}
});