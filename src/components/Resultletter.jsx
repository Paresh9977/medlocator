import { LocalHospitalOutlined, LocationOn, Navigation, AddIcCallOutlined, MoreHorizOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import Response from './Response';
import './ResultletterCSS.css';
// import 'G:/React/ecommerceapp/node_modules/bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
    height: 100%;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Resultletter = (props) => {
    return (
        <Container>
            {/* <InputContainer>
                <Input placeholder="Enter your medicine Name" />
                <Button>
                    <Search />
                </Button>
            </InputContainer> */}
            <div className="retable">
                <Response desc="Paracetamol" />
                <div className="resultA">
                    <table className="relayout" cellSpacing="0" cellPadding="0">
                        <tr>
                            <td className="lefttb"><LocalHospitalOutlined className="sym" /> <span>{props.address}</span></td>
                            <td className="righttbr"><span className="sym">&#8377; </span><span> Price: 300&#8377;</span></td>
                        </tr>
                        <tr>
                            <td className="lefttb"><LocationOn className="sym" />Bilaspur, Near by 36 Mall, flat no. 734</td>
                            <td className="righttb"><Navigation className="sym" /><a href="https://goo.gl/maps/72u4RDauSFHAr8Uh6">Direction</a></td>
                        </tr>
                        <tr>
                            <td className="lefttb"><AddIcCallOutlined className="sym" /> +91-1234567890</td>
                            <td className="righttb"><MoreHorizOutlined className="sym" /><a href="https://www.google.com/">In Stock</a></td>
                        </tr>
                    </table>
                    <div className="btnevent">
                        <button className="btncart">Add to cart</button>
                        <button className="mleft">Call</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Resultletter
