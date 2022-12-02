
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import BasketPage from './pages/BasketPage/BasketPage';
import DefaultLayout from './layouts/DefaultLayout';
import SimpleLayout from "./layouts/SimplеLayout";
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path={"/"} element={<DefaultLayout />}>
                  <Route index path={"/"} element={<IndexPage />} />
                  <Route path={"products"}>
                    <Route path={":userId"} element={<ProductPage />} />
                  </Route>
              </Route>
              <Route path={"/"} element={<SimpleLayout />}>
                  <Route path={"basket"} element={<BasketPage />} />
              </Route>
          </Routes>
      </div>
  );
}

export default App;
