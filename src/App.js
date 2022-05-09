import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Shared/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Package from './Pages/Package/Package';
import Login from './Form/Login/Login';
import Register from './Form/Register/Register';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/package' element={<Package></Package>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
