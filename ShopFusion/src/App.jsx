import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import {
  Cart,
  Home,
  Login,
  PageNotFound,
  Products,
  Register,
  Product,
} from "./pages";
import Layout from "./components/Layout";
import store from "./redux/store";
import Profile from "./components/forms/Profile";
import ProtectedRouter from "./services/ProtectedRouter";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:category" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<ProtectedRouter />} >
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="product/*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
