define(['esri/Map', 'esri/layers/VectorTileLayer', './config', './components/webmap', './components/datalist'], function (_Map, _VectorTileLayer, _config, _webmap, _datalist) {
  'use strict';

  var _Map2 = _interopRequireDefault(_Map);

  var _VectorTileLayer2 = _interopRequireDefault(_VectorTileLayer);

  var _webmap2 = _interopRequireDefault(_webmap);

  var _datalist2 = _interopRequireDefault(_datalist);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var mainLayer = new _VectorTileLayer2.default(_config.layerInfo);
  _config.mapOptions.layers = [mainLayer];

  var map = new _Map2.default(_config.mapOptions);
  _config.mapViewOptions.map = map;

  var view = _webmap2.default.create({
    params: _config.mapViewOptions,
    node: document.body
  });

  view.then(function () {
    _datalist2.default.create(view, mainLayer);
  });
});
//# sourceMappingURL=main.js.map
