import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import LoginProvider from "./Component/Auth/LoginProvider";
import Login from "./Component/Auth/Login";
import PrivateRoute from "./Component/Auth/LoginPrivateRoute";
import Navigation from "./Component/Navigation";
import Wishlist from "./Component/Pages/Wishlist";
import Category from "./Component/Category/Category";
import CategoryAll from "./Component/Category/CategoryAll";


function App() {
  const Home = lazy(() => import("./Component/Pages/Home"));
  const About = lazy(() => import("./Component/Pages/About"));
  const Contact = lazy(() => import("./Component/Pages/Contact"));
  const Gallery = lazy(() => import("./Component/Pages/Gallery"));
  const ProductList = lazy(() => import("./Component/Pages/ProductList"));
  const ProductDetail = lazy(() => import("./Component/Data/ProductDetail"));
  return (
    <div className="App">
      <LoginProvider>
        <BrowserRouter>
          <PrivateRoute>
            <Navigation />
          </PrivateRoute>

          <Suspense fallback={<div>Loading......</div>}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <PrivateRoute>
                    <About />
                  </PrivateRoute>
                }
              />
              <Route
                path="/contact"
                element={
                  <PrivateRoute>
                    <Contact />
                  </PrivateRoute>
                }
              />
              <Route
                path="/gallery"
                element={
                  <PrivateRoute>
                    <Gallery />
                  </PrivateRoute>
                }
              />
              <Route
                path="/product"
                element={
                  <PrivateRoute>
                    <ProductList />
                  </PrivateRoute>
                }
              />
              <Route
                path="/category"
                element={
                  <PrivateRoute>
                    <Category/>
                  </PrivateRoute>
                }
              />
              <Route
                path="/category/:id"
                element={
                  <PrivateRoute>
                    <CategoryAll />
                  </PrivateRoute>
                }
              />
              <Route
                path="/product/:detail"
                element={
                  <PrivateRoute>
                    <ProductDetail />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LoginProvider>
    </div>
  );
}

export default App;
