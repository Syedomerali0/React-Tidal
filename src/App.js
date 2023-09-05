import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  routes,
} from "react-router-dom";
import TidalSlider from "./Tidal/TidalSlider";
import Rootlayout from "./Tidal/Root";
import TradeOption from "./Tidal/TradeOption";
import TradeFuture from "./Tidal/TradeFuture";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { path: "/Tradeoption", element: <TradeOption /> },
      { path: "/TradeFuture", element: <TradeFuture /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
