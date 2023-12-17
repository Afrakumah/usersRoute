// import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Blog from "./pages/Blog";
import Register, { registerAction } from "./pages/Register";
import UsersLayout from "./layouts/UsersLayout";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";
import {homeDetailLoader, loader as userData, userDetailLoader } from './utils/User.util'
import UserError from "./pages/UserError";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />}loader={homeDetailLoader} />

      <Route path="/users" element={<UsersLayout />} errorElement={<UserError />} >
        <Route index element={<Users />} loader={userData} />

        <Route path=":id" element={<UserDetails />} loader={userDetailLoader} />

      </Route>

      <Route path="/blog" element={<Blog />} />
      <Route path="/register" element={<Register />} action={registerAction} />
      <Route path="*" element={<NotFound />} />

    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
