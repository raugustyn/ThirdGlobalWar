import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import { vectorLayer  } from './GeoJSONTest'
import { vector } from './CustomAnimation'
import { ExpandingProcess, styleFunction } from './mil/Symbology/ExpandingProcess'

const ps = new ExpandingProcess(null, null)

const backgroundLayer = new TileLayer({ source: new OSM({ wrapX: false }) })

const dynamicLayer = new VectorLayer({
  source: ps.source,
  style: styleFunction
})  

const layers = [
    backgroundLayer,
    vectorLayer,
    vector,
    dynamicLayer
]

export { backgroundLayer }
export default layers
