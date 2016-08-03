define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var mapOptions = exports.mapOptions = {};

  var mapViewOptions = exports.mapViewOptions = {
    center: [0, 0],
    zoom: 2,
    ui: {
      components: ['zoom', 'attribution']
    }
  };

  var layerInfo = exports.layerInfo = {
    url: 'https://basemaps.arcgis.com/b2/arcgis/rest/services/World_Basemap/VectorTileServer'
  };
});
//# sourceMappingURL=config.js.map
