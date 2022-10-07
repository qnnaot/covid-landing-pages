anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile("./assets/data.json", function (data) {
    var map = anychart.map();

    map
      .credits()
      .enabled(true)
      .url(
        "https://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_by_population_density"
      )
      .logoSrc("https://en.wikipedia.org/static/favicon/wikipedia.ico")
      .text(
        "Data source: https://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_by_population_density"
      );

    map
      .title()
      .enabled(true)
      .useHtml(true)
      .padding([10, 0, 10, 0])
      .text(
        '<span  style="color:#22577a; font-weight: 700;"">Bản đồ thống kê dịch COVID-19</span><br/>' +
          '<span  style="color:#22577a; font-size: 12px;">(Data source: Wikipedia)</span>'
      );

    map.geoData("anychart.maps.world");
    map.interactivity().selectionMode("none");
    map.padding(0);

    var dataSet = anychart.data.set(data);
    var densityData = dataSet.mapAs({ value: "density" });
    var series = map.choropleth(densityData);

    series.labels(false);

    series.hovered().fill("#f48fb1").stroke(anychart.color.darken("#f48fb1"));

    series.selected().fill("#c2185b").stroke(anychart.color.darken("#c2185b"));

    series
      .tooltip()
      .useHtml(true)
      .format(function () {
        return (
          '<span style="color: #f9d5bd"><span class="vietnamese">Tổng ca nhiễm</span><span class="english">Total Cases</span></span>: ' +
          parseFloat(this.getData("cases")).toLocaleString() +
          "<br/>" +
          '<span style="color: #f8297f"><span class="vietnamese">Tử vong</span><span class="english">Deaths</span></span>: ' +
          parseInt(this.getData("deaths")).toLocaleString() +
          "<br/>" +
          '<span style="color: #f9d5bd"><span class="vietnamese">Đã hồi phục</span><span class="english">Recovered</span></span>: ' +
          parseInt(this.getData("recovered")).toLocaleString()
        );
      });

    var scale = anychart.scales.ordinalColor([
      { less: 10 },
      { from: 10, to: 30 },
      { from: 30, to: 50 },
      { from: 50, to: 100 },
      { from: 100, to: 200 },
      { from: 200, to: 300 },
      { from: 300, to: 500 },
      { from: 500, to: 1000 },
      { greater: 1000 },
    ]);
    scale.colors([
      "#A3E4D7",
      "#48C9B0",
      "#48C9B0",
      "#1ABC9C",
      "#1ABC9C",
      "#117864",
      "#21618C",
      "#22577a",
      "#000000",
    ]);

    var colorRange = map.colorRange();

    series.colorScale(scale);

    // create zoom controls
    var zoomController = anychart.ui.zoom();
    zoomController.render(map);

    // set container id for the chart
    map.container("container-map");
    // initiate chart drawing
    map.draw();
  });
});
