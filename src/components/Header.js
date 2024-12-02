import styled from "styled-components";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./Navbar";



const LogoName = styled.div`
  width: 300px;
  margin: 15px;
  font-size: calc(20px +(30 - 20)*((100vw - 300px) /(1300 - 300)));
  text-decoration: none;
`
function Header() {
    return (
        <div>
            <LogoName>YoungFit!</LogoName>
            <Navbar />
        </div >
    );
}

export default Header;  