import Map from 'esri/Map';
import VectorTileLayer from 'esri/layers/VectorTileLayer';
import {
  mapOptions,
  mapViewOptions,
  layerInfo
} from './config';

import view from './components/webmap';
// import dataList from './components/datalist';

const mainLayer = new VectorTileLayer(layerInfo);
mapOptions.layers = [mainLayer];

const map = new Map(mapOptions);
mapViewOptions.map = map;

// dataList.create();

view.create({
  params: mapViewOptions,
  node: document.body
});
