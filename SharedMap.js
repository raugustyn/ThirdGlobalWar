import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {Map, View} from 'ol';
import layers from './Layers'

const map = new Map({
    target: 'map',
    layers: layers,
    view: new View({
      center: [4201651.73266473412513733, 6261171.034531933],
      zoom: 10
    })
});
  
export { map }