import teamColors from 'dojo/text!../resources/teams.json';
import baseStyleText from 'dojo/text!../resources/baseStyle.json.txt';
import dom from 'dojo/dom';
import domConstruct from 'dojo/dom-construct';
import on from 'dojo/on';

function create(view, tileLyr) {
    const container = document.createElement('div');
    container.classList.add('item-container');
    const elemList = document.createElement('select');
    elemList.setAttribute('id', 'teamsSelect');
    elemList.classList.add('esri-widget', 'item-list');
    container.appendChild(elemList);
    view.ui.add(elemList, 'top-right');

    const baseStyle = JSON.parse(baseStyleText);
    const tc = JSON.parse(teamColors);
    populateDropdown(dom.byId('teamsSelect'), tc);
    on(dom.byId('teamsSelect'), 'change', (evt) => {
      tileLyr.loadStyle(getNewStyle(baseStyle, tc[evt.target.value].colors.hex));
    });
}

var populateDropdown = function(dropdown, teamColorsArray) {
    teamColorsArray.forEach((team, i) => {
        var opt = domConstruct.create('option', {
            innerHTML: team.name,
            value: i
        });
        dropdown.add(opt);
    });
}

var getNewStyle = function(baseStyle, colorArray) {
    var retStyle = Object.assign({}, baseStyle);
    if (retStyle && retStyle.hasOwnProperty('layers')) {

        if (colorArray.length > 0) {
            // do background
            var backgroundLayers = retStyle.layers.filter(function(layer) {
                if (layer.id.indexOf('background') > -1 || layer.id.indexOf('Water area') > -1) {
                    return true;
                }
            });

            backgroundLayers.forEach(function(backgroundLayer) {
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
            var landLayers = retStyle.layers.filter(function(layer) {
                if (layer.id === 'Land') {
                    return true;
                }
            });

            landLayers.forEach(function(landLayer) {
                if (landLayer.paint.hasOwnProperty('fill-color')) {
                    landLayer.paint['fill-color'] = '#' + colorArray[1];
                }
            });
        }

        if (colorArray.length > 2) {
            // do other
            var otherLayers = retStyle.layers.filter(function(layer) {
                if (layer.id.indexOf('Building/General') > -1 || layer.id.indexOf('Railroad/2') > -1 || layer.id.indexOf('Railroad/1') > -1 || layer.id.indexOf('Urban area') > -1) {
                    return true;
                }
            });

            otherLayers.forEach(function(otherLayer) {
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


export default Object.freeze({
    create
});
