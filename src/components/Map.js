import tt from "@tomtom-international/web-sdk-maps";
import ttserv from "@tomtom-international/web-sdk-services";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { useEffect, useRef, useState } from "react";
import "../App.css";
import Result from "./Result";



export default function Map(props) {
  const mapElement = useRef();
  const [map, setMap] = useState();
  const [length, setLength] = useState()




  const drawRoute = (geoJson, map) => {
    if(map.getLayer('route')) {
      map.removeLayer('route')
      map.removeSource('route')
    }
    map.addLayer({
      id:'route',
      type:'line',
      source: {
          type:'geojson',
          data: geoJson
      },
      paint:{
        "line-color": 'red',
        'line-width': 5
      }
    })
  }

  const lonCenter= (props.geo.to.lon + props.geo.from.lon)/2
  const latCenter = (props.geo.to.lat + props.geo.from.lat) /2

  
  useEffect(() => {

  

    let map = tt.map({
      key: "P3l5CffXjhAIiP0wkMAPH8HGMkE1rAJl",
      container: mapElement.current,
      center: [lonCenter,latCenter],
      zoom: 6,
    });
  
 

    const addMarker = (ele) => {
      const element = document.createElement("div");
      element.className = "marker";

      const marker = new tt.Marker({
        element: element,
      })
        .setLngLat([ele.lon, ele.lat])
        .addTo(map);
    };
    addMarker(props.geo.to);
    addMarker(props.geo.from);

      ttserv.services
      .calculateRoute({
        key: "P3l5CffXjhAIiP0wkMAPH8HGMkE1rAJl",
        locations:[props.geo.from, props.geo.to]
      })
      .then ((routeData) => {
        const geoJson = routeData.toGeoJson()
        const routeLength = routeData.routes[0].summary.lengthInMeters
        drawRoute(geoJson, map)
        setLength(routeLength/1000)
        props.history(geoJson);
      });

      
      setMap(map)



    return () => map.remove();
  }, [props.geo]);

  return (
    <>
    
      <div className="map" ref={mapElement} />
      <Result length={length} />
    </>
  );
}
