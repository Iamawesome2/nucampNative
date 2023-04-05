import { useSelector } from 'react-redux';
import { Col, Row, } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {    
    const campsites = useSelector(selectAllCampsites);   
    console.log('campsites:', campsites);

    return (     
        <Row className="ms-auto">
            {campsites.map((campsite) => {  //array.map renders the 4 campsites one at a time
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={campsite.id}
                    >
                        <CampsiteCard campsite={campsite} /> 
                    </Col>
                );
            })}
        </Row>  
    );
};

export default CampsitesList;