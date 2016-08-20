import declare from 'dojo/_base/declare';
import _WidgetBase from 'dijit/_WidgetBase';
import _TemplatedMixin from 'dijit/_TemplatedMixin';
import template from './templates/StyleChooser.html'; // Rollup string plugin
import teamColors from './resources/teams';
import baseStyleFile from './resources/baseStyle';
import strings from 'dojo/i18n!./nls/strings';
import domConstruct from 'dojo/dom-construct';
import on from 'dojo/on';
import AgolUtils from './agol';
import clone from '../../node_modules/lodash-es/cloneDeep';
import CartoQuick from '../../node_modules/carto-quick/src/index';

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
      // if we are on the first (blank) item, disable. otherwise enable
      if (evt.target.value == -1) { // eslint-disable-line
        this.addToArcgisAccount.disabled = true;
      } else {
        this.addToArcgisAccount.disabled = false;
        this.currentPermutations = this.getAllPermutations(teamColors[evt.target.value].colors.hex);
        this.currentPermutationIndex = 0;
        this.tileLayer.loadStyle(
          CartoQuick.getStyle(
            this.currentPermutations[this.currentPermutationIndex],
            clone(baseStyleFile)
          )
        );
      }
    });

    on(this.randomizeColorsButton, 'click', () => {
      this.currentPermutationIndex = this.currentPermutationIndex + 1;
      if (this.currentPermutationIndex === this.currentPermutations.length) {
        this.currentPermutationIndex = 0;
      }
      this.tileLayer.loadStyle(
        CartoQuick.getStyle(
          this.currentPermutations[this.currentPermutationIndex],
          clone(baseStyleFile)
        )
      );
    });

    on(this.addToArcgisAccount, 'click', () => {
      const teamName = this.styleSelect.options[parseInt(this.styleSelect.value, 10) + 1].innerHTML;
      if (!this.agolUtils) {
        this.agolUtils = new AgolUtils('FyzA1FOhv2AroUpG');
      }
      this.agolUtils.saveTileBasemap(CartoQuick.getStyle(
        this.currentPermutations[this.currentPermutationIndex],
        clone(baseStyleFile)
      ), teamName);
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

  getAllPermutations(input) {
    this.permArr = [];
    this.usedChars = [];
    const returnPermutation = this.permute(input);
    return returnPermutation;
  },
  // http://stackoverflow.com/questions/9960908/permutations-in-javascript
  permute(input) {
    for (let i = 0; i < input.length; i++) {
      const ch = input.splice(i, 1)[0];
      this.usedChars.push(ch);
      if (input.length === 0) {
        this.permArr.push(this.usedChars.slice());
      }
      this.permute(input);
      input.splice(i, 0, ch);
      this.usedChars.pop();
    }
    return this.permArr;
  }
});
