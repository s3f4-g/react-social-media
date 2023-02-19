import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  // Route,
   Outlet,
} from "react-router-dom";
// import { Children } from "react";
import Navbar from "./components/navbar/Navbar";
import Righbar from "./components/rightBar/RighBar";
import Leftbar from "./components/leftBar/LeftBar";

function App() {
  const currentUser = true;

  const Layout = ()=>{
    return (
      <div> 
        <Navbar/>
        <div style={{display:"flex"}}>
          {/* <Leftbar/>
          <Outlet/>
          <Righbar/> */}
        </div>
      </div>
    )
  }  

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: 
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/profile/:id',
          element: <Profile/>
        }
      ]
        
    },
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
