// components/LocationPicker.jsx
import { useState, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const defaultCenter = {
  lat: -6.2, // Jakarta default
  lng: 106.816666,
};

export default function GoogleMapPage({ onLocationSelect }) {
  const [location, setLocation] = useState(defaultCenter);
  const searchBoxRef = useRef(null);
  const mapRef = useRef(null);

  const handlePlaceChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places.length === 0) return;

    const place = places[0];
    const newLocation = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };

    setLocation(newLocation);
    onLocationSelect(newLocation);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAfe8iicy_W0SoEKmvZ-1ZKsN0rpQrjYI4"
      libraries={libraries}
    >
      <div className="mb-2">
        <StandaloneSearchBox
          onLoad={(ref) => (searchBoxRef.current = ref)}
          onPlacesChanged={handlePlaceChanged}
        >
          <input
            type="text"
            placeholder="Search location"
            className="input input-bordered w-full"
          />
        </StandaloneSearchBox>
      </div>

      <GoogleMap
        center={location}
        zoom={15}
        mapContainerStyle={mapContainerStyle}
        onLoad={(map) => (mapRef.current = map)}
        onClick={(e) => {
          const coords = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          };
          setLocation(coords);
          onLocationSelect(coords);
        }}
      >
        {location && <Marker position={location} />}
      </GoogleMap>
    </LoadScript>
  );
}
