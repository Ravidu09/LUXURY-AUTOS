import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Vehicle from './Components/Home/Vehicle';
import Buy from './Components/Home/Buy';
import AboutUs from './Components/Home/AboutUs';
import Contact from './Components/Home/ContactUs';
import Register from './Components/Login/Register';
import UserProfile from './Components/pages/UserProfile';

import AdminDashboard from './Components/Admin/AdminDashboard';
import UserDetails from './Components/Admin/Users/UserDetails';
import AddUser from './Components/Admin/Users/AddUser';
import UpdateUser from './Components/Admin/Users/UpdateUser';
import Owner from './Components/Admin/Users/Owner';
import Customer from './Components/Admin/Users/Customer';
import Userlist from './Components/Admin/Users/Userlist';

import VehicleDetails from './Components/Admin/Movie/VehicleDetails';
import AddVehicle from './Components/Admin/Movie/AddVehicle';
import UpdateVehicle from './Components/Admin/Movie/UpdateVehicle';
import VehicleProfile from './Components/Home/MovieProfile';
import VehicleBooking from './Components/Home/MovieBooking';
import BookingConfirmation from './Components/Home/BookingConfirmation';
import BookingDetails from './Components/Admin/Booking/BookingDetails';
import AddBooking from './Components/Admin/Booking/AddBooking';
import UpdateBooking from './Components/Admin/Booking/UpdateBooking';
import Booking from './Components/Admin/Booking/Booking';

import { AuthProvider } from './Components/Auth/AuthContext';  // Import AuthProvider

import PromotionPage from './Components/Home/PromotionPage';



function App() {
  return (
    <AuthProvider>  {/* Wrap the entire app with AuthProvider */}
      <Router>
        <Routes>
          {/* Home Page as the default route */}
          <Route path="/" element={<Home />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />
          <Route path='/Vehicle' element={<Vehicle />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/promotions' element={<PromotionPage />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path="/Vehicles/:id" element={<VehicleProfile />} />
          <Route path="/book/:id" element={<VehicleBooking />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />




          {/* Login Page */}
          <Route path="/login" element={<Login />} />
          <Route path='/Vehicle' element={<Vehicle />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/About' element={<AboutUs />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/signup' element={<Register />} />

          <Route path="/user-list" element={<Userlist />} >
            <Route path="user-management" element={<UserDetails />} />
            <Route path="owner-management" element={<Owner />} />
            <Route path="customer-management" element={<Customer />} />
          </Route>

          <Route path="/admindashboard" element={<AdminDashboard />}>
            <Route path="userlist" element={<Userlist />} />
            <Route path="adduser" element={<AddUser />} />
            <Route path="update-user/:id" element={<UpdateUser />} />

            <Route path="Vehicle-management" element={<VehicleDetails />} />
            <Route path="Vehicle/:MID" element={<Vehicle />} />
            <Route path="add-Vehicle" element={<AddVehicle />} />
            <Route path="update-Vehicle/:MID" element={<UpdateVehicle />} />

            <Route path="booking-management" element={<BookingDetails />} />
            <Route path="booking/:id" element={<Booking />} />
            <Route path="add-booking" element={<AddBooking />} />
            <Route path="update-booking/:id" element={<UpdateBooking />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function NotFound() {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default App;
