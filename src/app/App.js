import declare from 'dojo/_base/declare';
import _WidgetBase from 'dijit/_WidgetBase';
import _TemplatedMixin from 'dijit/_TemplatedMixin';
import config from './config';
import mapService from './mapService';
import StyleChooser from './StyleChooser';

export default declare([_WidgetBase, _TemplatedMixin], {

  baseClass: 'app',
  // using an inline template
  templateString: `
    <div>
      <div data-dojo-attach-point="mapNode" class="map-container">
        <div data-dojo-attach-point="styleChooserWrapper"></div>
      </div>
    </div>
  `,

  // kick off app once this component has been created
  postCreate () {
    this.inherited(arguments);

    // initialize map
    config.mapProps.container = this.mapNode;
    mapService.init(config.mapProps);

    // add tile layer
    mapService.addVectorTileLayer(config.vectorLayerProps).then((layer) => {
      this.styleChooser = new StyleChooser({
        tileLayer: layer
      }, this.styleChooserWrapper);
    });
  }

  // startup () {
  //   // nothing yet!
  // }
});
