// import { Badge } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { mobile } from "../responsive"
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import './ResultletterCSS.css';

const Container = styled.div`
    height: 60px;
    background-color: #c5f0c5;
    ${mobile({ height: "50px"})}
`;

const InputContainer = styled.div`
    width: 50%;
    height: 50px;
    margin-top: 5px;
    background-color: teal;
    position: fixed;
    top: 29px;
    left: 420.8px;
    z-index: 300;
    display: flex;
    justify-content: center;
    border: 0.9px solid black;
`;

const Input = styled.input`
    border: none;
    flex: 8;
    font-size: 18px;
    padding-left: 20px;
`;


const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px"})}

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 16px;
    cursor: pointer;
    ${mobile({display: "none"})}
`;


// const Center = styled.div`
//     flex: 8;
//     text-align: center;
// `;

// const Logo = styled.h1`
//     font-weight: bold;
//     ${mobile({fontSize: "18px"})}
    
// `;

const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex:3, justifyContent: "center"})}
`;

const MenuItem = styled.div`
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Language>MedLoc</Language>

                    {/* <SearchContainer>
                        <Input />
                        <Search style={{color:"gray", fontSize: 16}} />
                    </SearchContainer> */}

                </Left><InputContainer>
                <Input placeholder="Enter your medicine Name" />
                <Button>
                    <Search />
                </Button>
            </InputContainer>
                <Right>
                    <MenuItem><Link className="alink" to="/result">REGISTER</Link></MenuItem>
                    <MenuItem><Link className="alink" to="/login">SIGN IN</Link></MenuItem>
                    <MenuItem><Link className="alink" to="/result">RESULT</Link></MenuItem>
                    {/* <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined></ShoppingCartOutlined>
                        </Badge>
                    </MenuItem> */}
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar
