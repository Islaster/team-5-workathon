import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { Map, View } from "ol";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { circular } from "ol/geom/Polygon";
import Control from "ol/control/Control";

const Map = (props) => {
// const userLat = document.getElementById("lat");
// const userLong = document.getElementById("long");
// const sendCoords = document.getElementById("sendCoords");
// console.log(userLat);
// console.log(userLong);
// console.log(sendCoords);

const mapImg = new Map({
  target: "map-container",
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

const source = new VectorSource();
const layer = new VectorLayer({
  source: source,
});

mapImg.addLayer(layer);
  navigator.geolocation.watchPosition(
    function (pos) {
      const coords = [pos.coords.longitude, pos.coords.latitude];
      const accuracy = circular(coords, pos.coords.accuracy);
      source.clear(true);
      source.addFeatures([
        new Feature(
          accuracy.transform("EPSG:4326", mapImg.getView().getProjection())
        ),
        new Feature(new Point(fromLonLat(coords))),
      ]);
      console.log(coords);
    },
    function (error) {
      alert(`ERROR: ${error.message}`);
    },
    {
      enableHighAccuracy: true,
    }
  );

const locate = document.createElement("div");
locate.className = "ol-control ol-unselectable locate";
locate.innerHTML = '<button title="Locate me">◎</button>';
locate.addEventListener("click", function () {
  if (!source.isEmpty()) {
    mapImg.getView().fit(source.getExtent(), {
      maxZoom: 13,
      duration: 500,
    });
  }
});
mapImg.addControl(
  new Control({
    element: locate,
  })
);

    return (
        <>
        <h3>Map</h3>
        </>
    )
}

export default Map