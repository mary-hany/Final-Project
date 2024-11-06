import { RouterProvider } from "react-router-dom";
import router from "./Components/Root";
export default function App() {
  return (
    <div className="col-12 App">
      <RouterProvider router={router} />
    </div>
  );
}
