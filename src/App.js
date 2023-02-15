import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Outlet,
  // Navigate,
} from "react-router-dom";

function App() {
  const Layout = ()=>{
    return (
      <div>
        
      </div>
    )
  }  



  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login/>,
    },
    {
      path: "/Register",
      element: <Register/>,
    },
  ]);
  
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
