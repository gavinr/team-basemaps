import Map from 'esri/Map';
import VectorTileLayer from 'esri/layers/VectorTileLayer';
// import watchUtils from 'esri/core/watchUtils';
import {
  mapOptions,
  mapViewOptions,
  layerInfo
} from './config';

import webmap from './components/webmap';
import dataList from './components/datalist';

const mainLayer = new VectorTileLayer(layerInfo);
mapOptions.layers = [mainLayer];

const map = new Map(mapOptions);
mapViewOptions.map = map;


const view = webmap.create({
  params: mapViewOptions,
  node: document.body
});



view.then(() => {
  mainLayer.on('layerview-create', () => {
    dataList.create(view, mainLayer);
  });
});
