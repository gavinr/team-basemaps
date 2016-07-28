require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/VectorTileLayer',
  'dojo/text!./resources/baseStyle.json.txt',
  'dojo/text!https://cdn.rawgit.com/teamcolors/teamcolors.github.io/master/src/scripts/data/leagues/nhl.json',
  'dojo/_base/lang',
  'dojo/dom',
  'dojo/dom-construct',
  'dojo/on',
  'dojo/domReady!'
], function(Map, MapView, VectorTileLayer, baseStyleText, teamColors, lang, dom, domConstruct, on) {

  var populateDropdown = function(dropdown, teamColorsArray) {
    console.log('pd', teamColorsArray);
    teamColorsArray.forEach(function(team, i) {
      var opt = domConstruct.create('option', {
        innerHTML: team.name,
        value: i
      });
      dropdown.add(opt);
    });
  }

  var getNewStyle = function(baseStyle, colorArray) {
    var retStyle = lang.clone(baseStyle);
    if(retStyle && retStyle.hasOwnProperty('layers')) {

      if(colorArray.length > 0) {
        // do background
        var backgroundLayers = retStyle.layers.filter(function(layer) {
          if(layer.id.indexOf('background') > -1 || layer.id.indexOf('Water area') > -1) {
            return true;
          }
        });

        console.log('backgroundLayers', backgroundLayers);
        backgroundLayers.forEach(function(backgroundLayer) {
          if (backgroundLayer.paint.hasOwnProperty('background-color')) {
            backgroundLayer.paint['background-color'] = "#" + colorArray[0];
          }
          if (backgroundLayer.paint.hasOwnProperty('fill-color')) {
            backgroundLayer.paint['fill-color'] = "#" + colorArray[0];
          }
        });
      }

      if(colorArray.length > 1) {
        // do land
        var landLayers = retStyle.layers.filter(function(layer) {
          if(layer.id === 'Land') {
            return true;
          }
        });

        console.log('landLayers', landLayers);
        landLayers.forEach(function(landLayer) {
          if (landLayer.paint.hasOwnProperty('fill-color')) {
            landLayer.paint['fill-color'] = "#" + colorArray[1];
          }
        });
      }

      if(colorArray.length > 2) {
        // do other
        var otherLayers = retStyle.layers.filter(function(layer) {
          if(layer.id.indexOf('Building/General') > -1 || layer.id.indexOf('Railroad/2') > -1 || layer.id.indexOf('Railroad/1') > -1 || layer.id.indexOf('Urban area') > -1) {
            return true;
          }
        });

        console.log('otherLayers', otherLayers);
        otherLayers.forEach(function(otherLayer) {
          if (otherLayer.paint.hasOwnProperty('background-color')) {
            otherLayer.paint['background-color'] = "#" + colorArray[2];
          }
          if (otherLayer.paint.hasOwnProperty('fill-color')) {
            otherLayer.paint['fill-color'] = "#" + colorArray[2];
          }
        });
      }

    }
    return retStyle;
  };

  // Create a Map
  var map = new Map();

  // Make map view and bind it to the map
  var view = new MapView({
    container: 'viewDiv',
    map: map,
    center: [-100, 37],
    zoom: 4
  });

baseStyle = JSON.parse(baseStyleText);

  tileLyr = new VectorTileLayer({
    url: 'https://basemaps.arcgis.com/b2/arcgis/rest/services/World_Basemap/VectorTileServer'
  });
  map.add(tileLyr);


  // setTimeout(function() {
  //   console.log('teamColors', JSON.parse(teamColors));
  //   tileLyr.loadStyle(getNewStyle(baseStyle, ["0546A0","FFC325","101F48"]));
  // }, 1000);
  var teamColors = JSON.parse(teamColors);
  populateDropdown(dom.byId('teamsSelect'), teamColors);
  on(dom.byId('teamsSelect'), 'change', function(evt) {
    console.log('change', evt.target.value);
    tileLyr.loadStyle(getNewStyle(baseStyle, teamColors[evt.target.value].colors.hex));
  });
});
