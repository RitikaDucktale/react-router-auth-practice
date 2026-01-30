import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { AuthProvider } from "./auth/AuthContext";
import ErrorComponent from "./pages/ErrorComponent";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary fallback={<ErrorComponent/>}>
    {/* <Suspense fallback={<div style={{color:"white"}}>Loading...</div>}> */}
  <AuthProvider>
    <RouterProvider router={routes}/>
  </AuthProvider>
  {/* </Suspense> */}
  </ErrorBoundary>
);
