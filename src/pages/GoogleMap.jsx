import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function GoogleMapPage() {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return <GoogleMap />;
}
