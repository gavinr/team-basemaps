define(['exports', 'esri/widgets/Compass', 'esri/widgets/Home'], function (exports, _Compass, _Home) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addWidgets = addWidgets;

  var _Compass2 = _interopRequireDefault(_Compass);

  var _Home2 = _interopRequireDefault(_Home);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function addWidgets(view) {
    var compass = new _Compass2.default({ view: view });
    var home = new _Home2.default({ view: view });
    view.ui.add(compass, 'top-left');
    view.ui.add(home, 'top-left');
  }
});
//# sourceMappingURL=widgets.js.map
