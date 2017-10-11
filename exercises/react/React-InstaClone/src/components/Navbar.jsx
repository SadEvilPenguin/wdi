import React, {Component} from 'react';
import {FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch} from 'react-icons/lib/fa';
import styled from 'styled-components';

const MainDiv = styled.div `
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 5vw;
  width: 90vw;
  height: 25px;
  border-bottom: 1px solid rgba(0,0,0,.0975);
`;
const LogoContainer = styled.p `
 font-size: 1.75em;
 font-family: 'Oleo Script', cursive;
 margin: 0;
 display: block;
 vertical-align: middle;
`;
const SearchDiv = styled.div `
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  width: 25%;
  padding: 7px;
  border-radius: 3px;
  color: #999;
`;

const Search = styled.input `
border: none;
font-weight: 300;
background: transparent;
text-align: center;
overflow: visible;
font-family: sans-serif;
font-size: 100%;
line-height: 1.15;
margin: 0;
padding: 1px;
text-indent: 0px;
text-shadow: none;
display: inline-block;
`;

const IconDiv = styled.div `
 width: 25%;
 display: flex;
 justify-content: space-around;
 font-size: 1.75em;
 margin: 0;
`;

class Navbar extends Component {
  render() {
    return (
      <MainDiv>
        <LogoContainer>
          <FaInstagram/>
          | Instaclone
        </LogoContainer>
        <SearchDiv>
          <FaSearch/><Search type="text" placeholder="Search"/>
        </SearchDiv>
        <IconDiv>
          <FaCompass/>
          <FaHeartO/>
          <FaUser/>
        </IconDiv>
      </MainDiv>
    );
  }
}

export default Navbar