import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
// import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import PopularCate from '../components/PopularCate';
import Products from '../components/Products';
import Resultletter from '../components/Resultletter';
// import TryImg from '../components/TryImg';

const Container = styled.div`
// border: 1px solid red;
`;

const Hr=styled.hr`
    margin-top: 8px;
`;

const Result = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Resultletter/>
            {/* <TryImg/> */}
            <Hr />
            <Products/>
            <Categories/>
            <hr />
            <Footer/>
        </Container>
    );
};

export default Result
