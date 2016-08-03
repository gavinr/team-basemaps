import MapView from 'esri/views/MapView';

import { addWidgets } from './widgets';

function createElement(node) {
  const elem = document.createElement('div');
  elem.classList.add('view-div');
  node.appendChild(elem);
  return elem;
}

function createMapView(params, container) {
  Object.assign(params, { container });
  const view = new MapView(params);
  return view;
}

function create({ params, node }) {
  const elem = createElement(node);
  const view = createMapView(params, elem);
  view.then(addWidgets);
  return view;
}

export default Object.freeze({ create });
