import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import './App.css';

const App = () => {
  const endpoint = "http://localhost:3001/api/v1/menus";
  const [menus, setMenus] = useState([]);
  const fetchMenu = async() => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setMenus(data);
  }
  useEffect(() => {
    fetchMenu();
  }, []);
  const [bannerComponent, setBannerComponent] = useState('Home');

  return (
    <div>
      <Header menus={menus} setBannerComponent={setBannerComponent} />
      <Banner component={bannerComponent} />
      <Footer />
    </div>
  );
};

export default App;
