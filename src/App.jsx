import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const currentUrl = window.location.href;
    let url = "./4p22-final-project-irina-ugrak/data.json";
    if (currentUrl.indexOf("irinaugrak.github.io") !== -1) {
        url = "./data.json";
    }
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            setProducts(result);
        });
  }, []);

  return (
    <div className="App">
      <Header />
      <Main products={products}/>
      <Footer />
    </div>
  );
}

export default App;
