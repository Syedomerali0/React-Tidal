import { Outlet } from "react-router-dom";
import TidalNav from "./TidalNav";
import TidalMain from "./TidalMain";
import TidalSlider from "./TidalSlider";
function Rootlayout() {
  return (
    <>
      <TidalNav />
      <TidalMain />
      <TidalSlider />
      <Outlet />
    </>
  );
}
export default Rootlayout;
