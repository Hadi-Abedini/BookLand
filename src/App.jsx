import { RouterProvider } from "react-router-dom";
import RoutesComponent from "./routes/RoutesComponent";
import routes from "./routes/RoutesComponent";

function App() {
  return (
    <>
      {/* <RoutesComponent></RoutesComponent> */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
