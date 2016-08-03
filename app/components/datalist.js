define(['exports', 'dojo/text!../resources/teams.json', 'dojo/text!../resources/baseStyle.json.txt', 'dojo/dom', 'dojo/dom-construct', 'dojo/on'], function (exports, _teams, _baseStyleJson, _dom, _domConstruct, _on) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _teams2 = _interopRequireDefault(_teams);

    var _baseStyleJson2 = _interopRequireDefault(_baseStyleJson);

    var _dom2 = _interopRequireDefault(_dom);

    var _domConstruct2 = _interopRequireDefault(_domConstruct);

    var _on2 = _interopRequireDefault(_on);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function create(view, tileLyr) {
        var container = document.createElement('div');
        container.classList.add('item-container');
        var elemList = document.createElement('select');
        elemList.setAttribute('id', 'teamsSelect');
        elemList.classList.add('esri-widget', 'item-list');
        container.appendChild(elemList);
        view.ui.add(elemList, 'top-right');

        var baseStyle = JSON.parse(_baseStyleJson2.default);
        var tc = JSON.parse(_teams2.default);
        populateDropdown(_dom2.default.byId('teamsSelect'), tc);
        (0, _on2.default)(_dom2.default.byId('teamsSelect'), 'change', function (evt) {
            if (evt.target.value !== -1) {
                tileLyr.loadStyle(getNewStyle(baseStyle, tc[evt.target.value].colors.hex));
            }
        });
    }

    var populateDropdown = function populateDropdown(dropdown, teamColorsArray) {
        // set an initial version for now, until we can get the layer loaded event.
        var opt = _domConstruct2.default.create('option', {
            innerHTML: '&#8681; Change me! &#8681;',
            value: -1
        });
        dropdown.add(opt);
        teamColorsArray.forEach(function (team, i) {
            var opt = _domConstruct2.default.create('option', {
                innerHTML: team.name,
                value: i
            });
            dropdown.add(opt);
        });
    };

    var getNewStyle = function getNewStyle(baseStyle, colorArray) {
        var retStyle = Object.assign({}, baseStyle);
        if (retStyle && retStyle.hasOwnProperty('layers')) {

            if (colorArray.length > 0) {
                // do background
                var backgroundLayers = retStyle.layers.filter(function (layer) {
                    if (layer.id.indexOf('background') > -1 || layer.id.indexOf('Water area') > -1) {
                        return true;
                    }
                });

                backgroundLayers.forEach(function (backgroundLayer) {
                    if (backgroundLayer.paint.hasOwnProperty('background-color')) {
                        backgroundLayer.paint['background-color'] = '#' + colorArray[0];
                    }
                    if (backgroundLayer.paint.hasOwnProperty('fill-color')) {
                        backgroundLayer.paint['fill-color'] = '#' + colorArray[0];
                    }
                });
            }

            if (colorArray.length > 1) {
                // do land
                var landLayers = retStyle.layers.filter(function (layer) {
                    if (layer.id === 'Land') {
                        return true;
                    }
                });

                landLayers.forEach(function (landLayer) {
                    if (landLayer.paint.hasOwnProperty('fill-color')) {
                        landLayer.paint['fill-color'] = '#' + colorArray[1];
                    }
                });
            }

            if (colorArray.length > 2) {
                // do other
                var otherLayers = retStyle.layers.filter(function (layer) {
                    if (layer.id.indexOf('Building/General') > -1 || layer.id.indexOf('Railroad/2') > -1 || layer.id.indexOf('Railroad/1') > -1 || layer.id.indexOf('Urban area') > -1) {
                        return true;
                    }
                });

                otherLayers.forEach(function (otherLayer) {
                    if (otherLayer.paint.hasOwnProperty('background-color')) {
                        otherLayer.paint['background-color'] = '#' + colorArray[2];
                    }
                    if (otherLayer.paint.hasOwnProperty('fill-color')) {
                        otherLayer.paint['fill-color'] = '#' + colorArray[2];
                    }
                });
            }
        }
        return retStyle;
    };

    exports.default = Object.freeze({
        create: create
    });
});
//# sourceMappingURL=datalist.js.map
