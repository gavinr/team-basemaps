import declare from 'dojo/_base/declare';
import OAuthInfo from 'esri/identity/OAuthInfo';
import esriId from 'esri/identity/IdentityManager';
import esriRequest from 'esri/request';
import swal from '../../node_modules/sweetalert2/src/sweetalert2';

export default declare([], {
  constructor(appId) {
    this.inherited(arguments);
    this.info = new OAuthInfo({
      appId: appId,
      popup: false
    });
  },

  /**
   * Saves a tile basemap to agol
   * @param  {object} style The JSON style
   * @param  {string} team  String of the team name, that will be the title.
   * @return {none} none
   */
  saveTileBasemap(style, team) {
    esriId.getCredential(`${this.info.portalUrl}/sharing`).then((credential) => {
      this._createVectorItem({
        title: `${team} Vector Basemap Layer`,
        url: 'https://basemaps.arcgis.com/b2/arcgis/rest/services/World_Basemap/VectorTileServer',
        tags: 'basemap,esri_basemap,vector,style,canvas,esri_vector,beta',
        snippet: `Basemap with colors in the style of the ${team}`,
        description: 'Basemap created from https://github.com/gavinr/team-basemaps/',
        type: 'Vector Tile Service',
        typeKeywords: '',
        thumbnailURL: 'https://arcgis.com/sharing/rest/content/items/0e02e6f86d02455091796eaae811d9b5/info/thumbnail/lightgray_thumb_b2.jpg',
        extent: '-180,-85,180,85',
        relationshipType: 'Style2Style',
        originItemId: '0e02e6f86d02455091796eaae811d9b5',
        f: 'json',
        token: credential.token
      }, style, credential.userId);
    }, (err) => {
      console.error('error', err);
    });
  },

/**
 * creates the REST calls to AGOL to create the vector basemap
 * @param  {object} postOptions the addItem post object
 * @param  {object} styleJson   the style json
 * @param  {string} userId      AGOL user id
 * @return {none} none
 */
  _createVectorItem(postOptions, styleJson, userId) {
    esriRequest(`https://arcgis.com/sharing/rest/content/users/${userId}/addItem`, {
      method: 'post',
      responseType: 'json',
      query: postOptions
    }).then((response) => {
      // add the root.json to the item:
      if (response && response.data && response.data.success && response.data.id) {
        esriRequest(`https://arcgis.com/sharing/rest/content/users/${userId}/items/${response.data.id}/addResources`, {
          method: 'post',
          responseType: 'json',
          query: {
            filename: 'root.json',
            resourcesPrefix: 'styles',
            f: 'json',
            token: postOptions.token,
            text: JSON.stringify(styleJson)
          }
        }).then(() => {
          swal('Basemap added to your account!', `Item with title "${postOptions.title}" was added to your ArcGIS Online account. <a href="https://arcgis.com/home/webmap/viewer.html?layers=${response.data.id}" target="_blank">Click here</a> to see it on a map right now.`, 'success');
        }, (err) => {
          console.error('error with addResources', err);
          swal('Oops...', 'Something went wrong! Please try again later.', 'error');
        });
      } else {
        console.error('problem with response');
        swal('Oops...', 'Something went wrong! Please try again later.', 'error');
      }
    }, (err) => {
      console.error('Error making request', err);
      swal('Oops...', 'Something went wrong! Please try again later.', 'error');
    });
  }
});
