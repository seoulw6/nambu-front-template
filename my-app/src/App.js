import "./assets/css/meyawo.css";
import "./assets/css/mystyle.css";
import "./assets/vendors/themify-icons/css/themify-icons.css";

import Home from './pages/Home';
import Main from "./pages/Main";
import Learn from "./pages/Learn";
import Test from "./pages/Test";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Sign from "./pages/Sign";
import Mypage from "./pages/Mypage";

import Header from "./components/Header";
import Footer from "./components/Footer";

import styled from "styled-components";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';




const AppDiv = styled.div`
  text-align: center;
`
const BackNav = styled.div`
  background: white;
  width: 100%;
  display: flex;
  color: #000;
  padding: 20px;
  font-weight: 500;
  font-size: 20px;
  box-sizing: border-box;
`

const LogoName = styled.div`
  font-size: 30px;
  width: 300px;
  margin: 15px;
`

const NavStyle = styled(NavLink)`
  color: #0f5aa4;
  padding: 20px;
  font-size: 20px;
  font-weight: 400;
  margin: 5px;
  outline: invert;
  &:link {
    transition : 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: aquamarine;
  }
  &.active {
    color: #17a2b8;
    position: relative;
    top: 2px;
  }
`

function App() {

  return (
    <AppDiv>
      <Header />

      <BrowserRouter>
        <BackNav>
          <LogoName>YoungFit!</LogoName>
          <NavStyle to='/home'>Home</NavStyle>
          <NavStyle to='/learn'>Sentence Reading</NavStyle>
          <NavStyle to='/test'>Level Test</NavStyle>
          <NavStyle to='/blog'>Blog</NavStyle>
          <NavStyle to='/contact'>Contact</NavStyle>
          <NavStyle to='/sign'>Sign In</NavStyle>
          <NavStyle to='/mypage'>Mypage</NavStyle>

        </BackNav>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/home' element={<Main />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/test' element={<Test />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/mypage' element={<Mypage />} />


        </Routes>
      </BrowserRouter>
      <Footer />
    </AppDiv>
  );
}

export default App;