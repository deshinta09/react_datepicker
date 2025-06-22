// // components/LocationPicker.jsx
// import { useState, useRef } from "react";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   StandaloneSearchBox,
// } from "@react-google-maps/api";

// const libraries = ["places"];
// const mapContainerStyle = {
//   height: "400px",
//   width: "100%",
// };

// const defaultCenter = {
//   lat: -6.2, // Jakarta default
//   lng: 106.816666,
// };

// export default function GoogleMapPage({ onLocationSelect }) {
//   const [location, setLocation] = useState(defaultCenter);
//   const searchBoxRef = useRef(null);
//   const mapRef = useRef(null);

//   const handlePlaceChanged = () => {
//     const places = searchBoxRef.current.getPlaces();
//     console.log({ places }, "<< handle place changed ref");
//     if (places.length === 0) return;

//     const place = places[0];
//     const newLocation = {
//       lat: place.geometry.location.lat(),
//       lng: place.geometry.location.lng(),
//     };

//     setLocation(newLocation);
//     onLocationSelect(newLocation);
//   };

//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyAfe8iicy_W0SoEKmvZ-1ZKsN0rpQrjYI4"
//       libraries={libraries}
//     >
//       <div className="mb-2">
//         <StandaloneSearchBox
//           onLoad={(ref) => (searchBoxRef.current = ref)}
//           onPlacesChanged={handlePlaceChanged}
//         >
//           <input
//             type="text"
//             placeholder="Search location"
//             className="input input-bordered w-full"
//           />
//         </StandaloneSearchBox>
//       </div>

//       <GoogleMap
//         center={location}
//         zoom={15}
//         mapContainerStyle={mapContainerStyle}
//         onLoad={(map) => (mapRef.current = map)}
//         onClick={(e) => {
//           const coords = {
//             lat: e.latLng.lat(),
//             lng: e.latLng.lng(),
//           };
//           setLocation({
//             lat: e.latLng.lat(),
//             lng: e.latLng.lng(),
//           });
//           console.log(
//             {
//               lat: e.latLng.lat(),
//               lng: e.latLng.lng(),
//               e,
//             },
//             "<< location yg pilih"
//           );
//           // onLocationSelect(coords);
//         }}
//       >
//         {/* {location && <Marker position={location} />} */}
//       </GoogleMap>
//     </LoadScript>
//   );
// }

import { useEffect, useRef, useState } from "react";

const defaultCenter = {
  lat: -6.2,
  lng: 106.816666,
};

export default function GoogleMapPage({ onLocationSelect }) {
  const mapRef = useRef(null);
  const inputRef = useRef(null);
  const markerRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [map, setMap] = useState(null);
  const [location, setLocation] = useState(defaultCenter);

  useEffect(() => {
    if (!window.google) return;

    const _map = new window.google.maps.Map(mapRef.current, {
      center: location,
      zoom: 14,
    });
    setMap(_map);

    autocompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        fields: ["geometry"],
      }
    );

    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current.getPlace();
      if (!place.geometry || !place.geometry.location) return;

      const newLoc = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };

      updateMarker(newLoc);
    });

    _map.addListener("click", (e) => {
      const coords = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      };
      updateMarker(coords);
    });
  }, []);

  const updateMarker = (coords) => {
    setLocation(coords);
    onLocationSelect(coords);

    if (!window.google?.maps?.marker?.AdvancedMarkerElement) return;

    if (markerRef.current) {
      markerRef.current.position = coords;
    } else {
      markerRef.current = new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position: coords,
        title: "Lokasi dipilih",
      });
    }

    map?.panTo(coords);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Cari lokasi..."
        className="input input-bordered w-full mb-2"
      />
      <div
        ref={mapRef}
        style={{ height: "400px", width: "100%", borderRadius: "8px" }}
      />
    </div>
  );
}
