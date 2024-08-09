import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import Hero from './components/Hero';
import Blog from './components/Blog';
import OurServices from './components/OurServices';
import NutritionDiet from './pages/NutritionDiet';
import FitnessWorkouts from './pages/FitnessWorkouts';
import HomeExercise from './pages/HomeExercise';
import MentalWellness from './pages/MentalWellness';
import NaturalRemedies from './pages/NaturalRemedies';
import HealthSupplements from './pages/HealthSupplements';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import OfferPricing from './components/OfferPricing';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import ProductPage from './pages/ProductPage';
import FeaturedProducts from './components/FeaturedProducts';
import './App.css';
import './custom.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SocialMedia />
                <Hero />
                <OurServices />
                <FeaturedProducts />
                <Blog />
                <Testimonials />
                <OfferPricing />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/1" element={<Blog1 />} />
          <Route path="/blog/2" element={<Blog2 />} />
          <Route path="/blog/3" element={<Blog3 />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nutrition-diet" element={<NutritionDiet />} />
          <Route path="/fitness-workouts" element={<FitnessWorkouts />} />
          <Route path="/home-exercise" element={<HomeExercise />} />
          <Route path="/mental-wellness" element={<MentalWellness />} />
          <Route path="/natural-remedies" element={<NaturalRemedies />} />
          <Route path="/health-supplements" element={<HealthSupplements />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
