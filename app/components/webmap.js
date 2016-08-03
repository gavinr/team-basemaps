define(['exports', 'esri/views/MapView', './widgets'], function (exports, _MapView, _widgets) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _MapView2 = _interopRequireDefault(_MapView);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function createElement(node) {
    var elem = document.createElement('div');
    elem.classList.add('view-div');
    node.appendChild(elem);
    return elem;
  }

  function createMapView(params, container) {
    Object.assign(params, { container: container });
    var view = new _MapView2.default(params);
    return view;
  }

  function create(_ref) {
    var params = _ref.params;
    var node = _ref.node;

    var elem = createElement(node);
    var view = createMapView(params, elem);
    view.then(_widgets.addWidgets);
    return view;
  }

  exports.default = Object.freeze({ create: create });
});
//# sourceMappingURL=webmap.js.map
