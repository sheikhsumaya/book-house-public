import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Shared/NotFound/NotFound";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Items from "./Pages/Items/Items";
import Contract from "./Pages/Home/Contract/Contract";
import Login from "./From/Login/Login";
import Register from "./From/Register/Register";
import RequiredAuth from "./From/RequiredAuth/RequiredAuth";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Detail from "./Shared/Detail/Detail";
import AddServices from "./Pages/AddServices/AddServices";
import ManageServices from "./Pages/ManageSevices/ManageServices";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/detail/:detailId" element={<Detail></Detail>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="/contact" element={<Contract></Contract>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout" 
          element={
            <RequiredAuth>
              <CheckOut></CheckOut>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/addservice" 
          element={
            <RequiredAuth>
              <AddServices></AddServices>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/manageservice" 
          element={
            <RequiredAuth>
              <ManageServices></ManageServices>
            </RequiredAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
