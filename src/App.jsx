import { RouterProvider } from "react-router-dom";
import routes from "./routes/RoutesComponent";


function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
