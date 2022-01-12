import styled from 'styled-components'
import { mobile } from '../responsive';
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    // border: 1px solid red;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "25vh"})}

`;
// const Info = styled.div`
//     // position: absolute;
//     // top: 460px;
//     // left: 0;
//     width: 100%;
//     height: 20%;
//     background-color: gray;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     // justify-content: center;
// `;
// const Title = styled.h1`
//     color: black;
//     background-color: #1bf0f080;
//     margin-bottom: 10px;
//     ${mobile({display: "none"})}
// `;
// const Button = styled.button`
//     border: none;
//     padding: 10px;
//     // background-color: #1bf0f080;
//     border: 0.8px solid black;
//     color: white;
//     cursor: pointer;
//     font-weight: 600;
// `;

const CategoryItem
 = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
        </Container>
    )
}

export default CategoryItem

