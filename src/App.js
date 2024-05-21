import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import ServiceRequest from './pages/ServiceRequest';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <a href="/" className="text-2xl font-bold">Property Management</a>
            <div>
              <a href="/" className="mr-4">Home</a>
              <a href="/about-us" className="mr-4">About Us</a>
              <a href="/services" className="mr-4">Services</a>
              <a href="/contact-us" className="mr-4">Contact Us</a>
              <a href="/service-request">24/7 Service Request</a>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/services" component={Services} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/service-request" component={ServiceRequest} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;