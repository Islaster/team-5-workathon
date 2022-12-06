    import "./Map.css";
    import OSM from 'ol/source/OSM';
    import TileLayer from 'ol/layer/Tile';
    import {Map, View} from 'ol';
    import {fromLonLat} from 'ol/proj';
    // import "node_modules/ol/ol.css";
const MyMap = (props) => {
    
    new Map({
      target: 'map-container',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
    });
    
    return (
        <>
        <div id="map-container"></div>
        </>
    )
}

export default MyMap