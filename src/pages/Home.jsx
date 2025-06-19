import Card from "../components/Card";
import GoogleMapPage from "./GoogleMap";

export default function Home() {
  return (
    <>
      <GoogleMapPage
        onLocationSelect={(location) => console.log(location, "<< location")}
      />
      {/* <Card />
      <Card />
      <Card /> */}
    </>
  );
}
