import declare from 'dojo/_base/declare';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import VectorTileLayer from 'esri/layers/VectorTileLayer';

// define a stateful service to manage the map
const MapService = declare([], {
  // create a map and map view
  init: function (options) {
    this.map = new Map({
      basemap: options.basemap
    });
    delete options.basemap;
    options.map = this.map;
    this.view = new MapView(options);
  },

  // add a feature layer to the map
  addVectorTileLayer: function (props) {
    if (!this.map) {
      return;
    }

    const vectorTileLayer = new VectorTileLayer(props);
    this.map.add(vectorTileLayer);
    return vectorTileLayer;
  }
});

// return a singleton instance of this service
if (!_instance) {
  var _instance = new MapService();
}
export default _instance;
