import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
// import { About } from "./components/About";

import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import React from "react";
import Form, { contactAction } from "./components/Form";
import { Navbar } from "./components/Navbar";
import { Careers, careersLoader } from "./components/Careers";
import { CareersLayout } from "./layouts/CareersLayout";
import { UsersData } from "./components/users/UsersData";

const LazyAbout = React.lazy(() => import("./components/About"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route
        path="about"
        element={
          <React.Suspense fallback="Loading...">
            <LazyAbout />
          </React.Suspense>
        }
      />
      <Route path="order-summary" element={<OrderSummary />} />

      <Route path="products" element={<Products />}>
        <Route index element={<FeaturedProducts />} />
        <Route path="featured" element={<FeaturedProducts />} />
        <Route path="new" element={<NewProducts />} />
      </Route>

      <Route path="users" element={<Users />} />
      <Route path="users/:userId" element={<UserDetails />} />
      <Route path="form" element={<Form />} />

      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
      </Route>

      <Route path="usersdata" element={<UsersData />} />
      <Route path="contact" element={<Form />} action={contactAction} />

      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);

function App() {
  return (
    // <div className="min-h-screen flex justify-center items-center">
    //   <h1 className="text-3xl font-bold text-blue-600">
    //     Install & Setup Vite + React + Typescript + Tailwind CSS 3
    //   </h1>
    // </div>

    // <Navbar />
    <RouterProvider router={router} />
  );
}

export default App;
