//alert("I am an alert box!");

function addroute (routetrace, route) {
    routetrace.x.push(route.dist);
    routetrace.y.push(route.elevation);
    routetrace.text.push(route.name);
}

var mindist = 0;
var maxdist = 110;
var minElev = 0;
var maxElev = 1100;

var inp = `
<label>Min Distance:</label>
<input type="number" id="mindist" name="mindist" value="0"><br><br>
<label>Max Distance:</label>
<input type="number" id="maxdist" name="maxdist" value="110"><br><br>
<label>Min Elevation:</label>
<input type="number" id="minelevation" name="minelevation" value="0"><br><br>
<label>Max Elevation:</label>
<input type="number" id="maxelevation" name="maxelevation" value="1100"><br><br>
`;

function renderPlot(){
    var roadtrace = {
        x: [],
        y: [],
        mode: 'markers',
        type: 'scatter',
        name: 'Road Routes',
        text: [],
        marker: { size: 12 }
    };

    var route = {
        dist: 100,
        elevation: 999,
        name: "testroute1",
        terrain: 1 
    };
    addroute(roadtrace, route);

    route = {
        dist: 50,
        elevation: 50,
        name: "testroute2",
        terrain: 1 
    }
    addroute(roadtrace, route);
      
      var data = [ roadtrace];
      
      var layout = {
        xaxis: {
          range: [ mindist, maxdist ]
        },
        yaxis: {
          range: [minElev, maxElev]
        },
        title:'Data Labels Hover'
      };
      
      Plotly.newPlot('scatterdiv', data, layout);
}

function minDistUpdate(e) {
    mindist = e.target.value;
    renderPlot();
}

function maxDistUpdate(e) {
    maxdist = e.target.value;
    renderPlot();
}

function minElUpdate(e) {
    minElev = e.target.value;
    renderPlot();
}

function maxElUpdate(e) {
    maxElev = e.target.value;
    renderPlot();
}

window.addEventListener('load', function () {
    // left is td[0]
    var lefttd = document.querySelectorAll("td")[0];
    lefttd.innerHTML = inp;

    document.getElementById("mindist").addEventListener('input', minDistUpdate);
    document.getElementById("maxdist").addEventListener('input', maxDistUpdate);
    document.getElementById("minelevation").addEventListener('input', minElUpdate);
    document.getElementById("maxelevation").addEventListener('input', maxElUpdate);

    // scatter plot is td[1]
    var scatterplottd = document.querySelectorAll("td")[1];
    scatterplottd.innerHTML = "<div id=\"scatterdiv\" style=\"width:600px;height:600px;\"></div>";

    renderPlot();
  });
