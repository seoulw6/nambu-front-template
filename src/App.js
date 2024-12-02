import "./assets/css/meyawo.css";
import "./assets/css/mystyle.css";
import "./assets/vendors/themify-icons/css/themify-icons.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Learn from "./pages/Learn";
import Test from "./pages/Test";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Sign from "./pages/Sign";
import Join from "./pages/Join";
import Mypage from "./pages/Mypage";
import Mytest from "./pages/Mytest";
import LearnAdd from "./pages/LearnAdd";
import Package from "./pages/Package";
import BlogAdd from "./pages/BlogAdd";
import BlogDetail from "./pages/BlogDetail";
import Learning from "./pages/Learning";

import styled from "styled-components";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 20px;
`;




function App() {
  return (
    <AppDiv className='header'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Learn />} />
          <Route path='/main' element={<Main />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/test' element={<Test />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/join' element={<Join />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/mytest' element={<Mytest />} />
          <Route path='/learnAdd' element={<LearnAdd />} />
          <Route path='/package/:id' element={<Package />} />
          <Route path='/blogAdd' element={<BlogAdd />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='/learning/:id' element={<Learning />} />
          <Route path='/BlogDetail/:id' element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AppDiv>
  );
}

export default App;