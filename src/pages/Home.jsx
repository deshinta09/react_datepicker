import Card from "../components/Card";
import GoogleMapPage from "./GoogleMap";

export default function Home() {
  return (
    <>
      <GoogleMapPage onLocationSelect={(location) => ""} />
      {/* <Card />
      <Card />
      <Card /> */}
    </>
  );
}
