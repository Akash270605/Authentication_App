import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router";
import App from './App';
import About from './pages/About';
import Login from './pages/Login';
import Services from './pages/Services';
import Signup from './pages/Signup';
import RootLayout from './pages/RootLayout';
import UserLayout from './pages/users/UserLayout';
import UserHome from './pages/users/UserHome';
import Userprofile from './pages/users/Userprofile';
import OAuthSuccess from './pages/OAuthSuccess';
import OAuthFailure from './pages/OAuthFailure';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout/>} >
        <Route index element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={ <UserLayout /> } >
          <Route index element={<UserHome />} />
          <Route path="profile" element={<Userprofile />} />
        </Route>
        <Route path="oauth/success" element={<OAuthSuccess />} />
        <Route path="oauth/failure" element={<OAuthFailure />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
