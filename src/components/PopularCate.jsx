import styled from "styled-components"

const Container = styled.div`
// border: 0.5px solid black;
height: 200px;
`;
const Image = styled.img`
    margin-left: 15px;
    cursor: pointer;
    &:hover{
    opacity: 1.7;
    transform: scale(0.9);

    }
`;

const TitleCat = styled.h2`
// border: 0.5px solid black;
    margin: 0 auto;
    padding: 8px;
width:86%;
`;

const ImageStyle = styled.div`
    width: 80%;
    // border: 0.5px solid red;
    margin: 0 auto;
`;
// const Htitle = styled.div`
//     width: 80%;
//     margin: 0 auto;
//     // display: initials;
//     // display: initial;
//     // margin-left: 50px
//     // flex-direction: row;
// `;

const PopularCate = () => {
    return (
        <Container>
            <TitleCat>
                Popular Categories
            </TitleCat>
            <ImageStyle>
                <Image alt="Covid Essentials" src="https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1641187637/lcfd1eufwbtituwyswpi.jpg" title="Covid Essentials" />
                <Image alt="Ayurveda" src="https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525304/kfyx5kvvn2ai5fwswhsa.png" title="Ayurveda" />
                <Image alt="Vitamins &amp; Supplements" src="https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525284/cabpuknnlyyzgqfnb4x5.png" title="Vitamins &amp; Supplements" ></Image>
                <Image alt="Healthcare Devices" src="https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525147/qjfdkz5njmk9n7vvrbb3.png" title="Healthcare Devices" ></Image>
                <Image alt="Homeopathy" src="https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525320/j7ruar88gacbzksuadjn.png" title="Homeopathy" ></Image>
                <Image alt="Diabetes Care" src="https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525219/tfrtydrq6uzeyb42gh08.png" title="Diabetes Care" ></Image>
                <Image alt="Skin Care" src="https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525251/bkhusfgfiu9qedowph2i.png" title="Skin Care" ></Image>
                <Image alt="Health Food &amp; Drinks" src="https://onemg.gumlet.io/image/upload/w_150,h_150,c_fit,a_ignore,q_auto,f_auto/v1624525241/megirsoxbbpn6oiv4g4w.png" title="Health Food &amp; Drinks" ></Image>
            </ImageStyle>
        </Container>
    )
}

export default PopularCate
