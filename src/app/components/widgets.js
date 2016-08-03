import Compass from 'esri/widgets/Compass';
import Home from 'esri/widgets/Home';

export function addWidgets(view) {
  const compass = new Compass({ view });
  const home = new Home({ view });
  view.ui.add(compass, 'top-left');
  view.ui.add(home, 'top-left');
}
