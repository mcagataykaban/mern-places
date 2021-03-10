import React, { useRef, useEffect } from "react";
import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();
  const { center, zoom } = props;
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: props.center, map: map });
  }, [center, zoom, props.center, props.zoom]);

  return (
    <div
      ref={mapRef}
      style={props.style}
      className={`map ${props.className}`}
    ></div>
  );
};

export default Map;
