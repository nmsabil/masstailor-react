import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 51.500029193513484,
  lng: -0.3833605624073296,
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCQ4VDNbIARn-nN9FniyTJdZFcd5XpWJgE",
  });

  return isLoaded ? (
    <>
      <GoogleMap
        id='marker-example'
        mapContainerStyle={containerStyle}
        zoom={16}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMaps);
