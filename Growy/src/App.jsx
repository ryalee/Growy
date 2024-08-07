// import { useState } from 'react'
import './App.css';

import Feedback from './components/Feedback/feedback';
import Footer from './components/Footer/footer';
import Form from './components/Form/form';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Projects from './components/Projects/projects';
import Services from './components/Services/services';
import WhyUs from './components/WhyUs/whyUs';

export default function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Hero/>
      <Services/>
      <WhyUs/>
      <Projects/>
      <Feedback/>
      <Form/>
      <Footer/>
    </div>
  )
}