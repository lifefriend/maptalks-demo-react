import React, { Component } from "react";
import * as maptalks from "maptalks";
import { ArcGISTileLayer } from "maptalks.arcgistilelayer";

class App extends Component {
  componentDidMount() {
    let map = new maptalks.Map("map", {
      center: [105.08052356963802, 36.04231948670001],
      zoom: 4,
      minZoom: 1,
      maxZoom: 18,
      spatialReference: {
        projection: "EPSG:4326"
      },
      baseLayer: new ArcGISTileLayer(
        'ESRI_Imagery_World_2D', 
        {
          urlTemplate: 'https://services.arcgisonline.com/arcgis/rest/services/ESRI_Imagery_World_2D/MapServer'
          
        }
      ),
      
    });
    console.log("map: ", map);
  }
  render() {
    return <div id="map" />;
  }
}

export default App;
