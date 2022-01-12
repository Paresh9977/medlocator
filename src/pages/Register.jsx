import styled from "styled-components"
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const ContainerImage=styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.2),
    rgba(255, 255, 255, 0.2)), url("https://cdn.pixabay.com/photo/2021/10/11/17/37/doctor-6701410_960_720.jpg");
    background-size: cover;
    background-repeat: no-repeat;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    margin: 10px auto;
    ${mobile({ width: "80%" })}
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap; 
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    font-size: 14px;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    ${mobile({ margin: "12px 0px", border: "1px solid black", padding: "7px" })}
`;

const Agreement = styled.span`
    font-size: 18px;
    margin: 20px 0px;
    font-weight: 500;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <ContainerImage>
                <Announcement/>
                <Navbar/>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="name" />
                        <Input placeholder="last name" />
                        <Input placeholder="username" />
                        <Input placeholder="email" />
                        <Input placeholder="password" />
                        <Input placeholder="confirm password" />
                        <Agreement>
                            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>CREATE</Button>
                    </Form>
                </Wrapper>
            </ContainerImage>
        </Container>
    )
}

export default Register
