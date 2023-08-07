import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Header from "./containers/Header";

function App() {
  return (
    <div className='app'>
      
      <Router>
      <Header></Header>
    
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

function NotFound() {
  return <div>404 Not Found</div>;
}

export default App;
