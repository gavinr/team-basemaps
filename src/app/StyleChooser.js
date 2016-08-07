import declare from 'dojo/_base/declare';
import _WidgetBase from 'dijit/_WidgetBase';
import _TemplatedMixin from 'dijit/_TemplatedMixin';
import template from './templates/StyleChooser.html'; // Rollup string plugin
import teamColors from './resources/teams';
import baseStyleFile from './resources/baseStyle';
import strings from 'dojo/i18n!./nls/strings';
import domConstruct from 'dojo/dom-construct';
import on from 'dojo/on';

export default declare([_WidgetBase, _TemplatedMixin], {

  baseClass: 'style-chooser',
  nls: strings,
  templateString: template,

  // set panel header title
  _setTitleAttr: {
    node: 'titleNode',
    type: 'innerHTML'
  },

  postCreate() {
    this.inherited(arguments);
    this.populateSelect(this.styleSelect, teamColors);
    on(this.styleSelect, 'change', (evt) => {
      if (evt.target.value !== -1) {
        this.tileLayer.loadStyle(
          this.getNewStyle(
            baseStyleFile,
            teamColors[evt.target.value].colors.hex
          )
        );
      }
    });
  },

  populateSelect(select, teamColorsArray) {
    // set an initial version for now,
    // until we can get the layer loaded event.
    const opt = domConstruct.create('option', {
      innerHTML: `&#8681; ${this.nls.ChangeMe} &#8681;`,
      value: -1
    });
    this.styleSelect.add(opt);
    teamColorsArray.forEach((team, index) => {
      this.styleSelect.add(domConstruct.create('option', {
        innerHTML: team.name,
        value: index
      }));
    });
  },

  getNewStyle(baseStyle, colorArray) {
    var retStyle = Object.assign({}, baseStyle);
    if (retStyle && retStyle.hasOwnProperty('layers')) {

      if (colorArray.length > 0) {
        // do background
        const backgroundLayers = retStyle.layers.filter((layer) => {
          if (layer.id.indexOf('background') > -1 || layer.id.indexOf('Water area') > -1) {
            return true;
          }
          return false;
        });

        backgroundLayers.forEach((backgroundLayer) => {
          if (backgroundLayer.paint.hasOwnProperty('background-color')) {
            backgroundLayer.paint['background-color'] = `#${colorArray[0]}`;
          }
          if (backgroundLayer.paint.hasOwnProperty('fill-color')) {
            backgroundLayer.paint['fill-color'] = `#${colorArray[0]}`;
          }
        });
      }

      if (colorArray.length > 1) {
        // do land
        const landLayers = retStyle.layers.filter((layer) => {
          if (layer.id === 'Land') {
            return true;
          }
          return false;
        });

        landLayers.forEach((landLayer) => {
          if (landLayer.paint.hasOwnProperty('fill-color')) {
            landLayer.paint['fill-color'] = `#${colorArray[1]}`;
          }
        });
      }

      if (colorArray.length > 2) {
        // do other
        const otherLayers = retStyle.layers.filter((layer) => {
          if (layer.id.indexOf('Building/General') > -1 || layer.id.indexOf('Railroad/2') > -1 || layer.id.indexOf('Railroad/1') > -1 || layer.id.indexOf('Urban area') > -1) {
            return true;
          }
          return false;
        });

        otherLayers.forEach((otherLayer) => {
          if (otherLayer.paint.hasOwnProperty('background-color')) {
            otherLayer.paint['background-color'] = `#${colorArray[2]}`;
          }
          if (otherLayer.paint.hasOwnProperty('fill-color')) {
            otherLayer.paint['fill-color'] = `#${colorArray[2]}`;
          }
        });
      }

    }
    return retStyle;
  }
});
