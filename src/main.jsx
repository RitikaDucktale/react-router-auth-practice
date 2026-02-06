import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";
import {UserContextProvider} from './context/UserContext';
import ErrorComponent from "./pages/ErrorComponent";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary fallback={<ErrorComponent/>}>
    <Suspense fallback={<div style={{color:"white"}}>Loading...</div>}>
  <AuthProvider>
    <UserContextProvider>
    <RouterProvider router={routes}/>
    </UserContextProvider>
  </AuthProvider>
  </Suspense>
  </ErrorBoundary>
);
