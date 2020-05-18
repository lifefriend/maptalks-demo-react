import React, { Component } from "react";
import * as maptalks from "maptalks";
import { WMTSTileLayer } from "maptalks.wmtstilelayer";

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
      baseLayer: new WMTSTileLayer("base", {
        tileSystem: [1, -1, -180, 90],
        layer: "vec",
        tilematrixset: "c",
        format: "tiles",
        urlTemplate:
          "http://t{s}.tianditu.com/vec_c/wmts?tk=de0dc270a51aaca3dd4e64d4f8c81ff6",
        subdomains: ["1", "2", "3", "4", "5"],
        attribution:
          '&copy; <a target="_blank" href="http://www.tianditu.cn">Tianditu</a>'
      }),
      layers: [
        new WMTSTileLayer("road", {
          layer: "cva",
          tilematrixset: "c",
          format: "tiles",
          urlTemplate:
            "http://t{s}.tianditu.com/cva_c/wmts?tk=de0dc270a51aaca3dd4e64d4f8c81ff6",
          subdomains: ["1", "2", "3", "4", "5"],
          opacity: 1
        })
      ]
    });
    console.log("map: ", map);
  }
  render() {
    return <div id="map" />;
  }
}

export default App;
