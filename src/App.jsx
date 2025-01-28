import {Button} from "@material-tailwind/react"
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Layout from "./components/layout/Layout"
import Home from "./pages/home/Home"
import NoPage from "./pages/noPage/NoPage"
import ProductInfo from "./pages/productInfo/ProductInfo"
import Cart from "./pages/cart/CartPage"
import AllProduct from "./pages/allProduct/AllProduct"
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import UserDashboard from "./pages/user/UserDashboard"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AddProductPage from "./pages/admin/AddProductPage"
import UpdateProductPage from "./pages/admin/UpdateProductPage"
import State from "./context/State"
import { Toaster } from "react-hot-toast"
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin"
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser"
import CategoryPage from "./pages/category/CategoryPage"

function App() {

 const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      errorElement:<NoPage />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/productinfo/:id",
          element:<ProductInfo />
        },
        {
          path:"/cart",
          element:<Cart />
        },{
          path:"/allproduct",
          element:<AllProduct />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/signup",
          element:<Signup />
        },
        {
          path:"/category/:categoryname",
          element:<CategoryPage />
        },
        {
          path:"/user-dashboard",
          element: (
          <ProtectedRouteForUser>
            <UserDashboard />
          </ProtectedRouteForUser>
            
          )
        },
        {
          path:"/admin-dashboard",
          element: (
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          )
        },
        {
          path:"/addproduct",
          element: (
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          )
        },
        {
          path:"/updateproduct/:id",
          element: (
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          )
        }
      ]

    }
 ])

  return (
    <>
      <State>
        <RouterProvider router={router}>
        </RouterProvider>
      </State>
    <Toaster />
    </>
  )
}

export default App
