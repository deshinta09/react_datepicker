import Card from "../components/Card";
import GoogleMapPage from "./GoogleMap";
import ScanProfile from "./ScanProfile";
import TableDragDrop from "./TableDragDrop";
import TableManagement from "./TableManagement";

export default function Home() {
  return (
    <>
      {/* <GoogleMapPage onLocationSelect={(location) => ""} /> */}
      {/* <Card />
      <Card />
      <Card /> */}
      {/* <TableManagement /> */}
      {/* <TableDragDrop /> */}
      <ScanProfile />
    </>
  );
}
