import { Col, Row, } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = ({ setCampsiteId }) => {    //destructure set setCampsiteId from the props object
    const campsites = selectAllCampsites();   

    return (     
        <Row className="ms-auto">
            {campsites.map((campsite) => {  //array.map renders the 4 campsites one at a time
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={campsite.id}
                        onClick={() => setCampsiteId(campsite.id)}    /*campsite id is passed to setCampsiteId function, id changes at each iteration, col is clickable now like a button */
                    > 
                        <CampsiteCard campsite={campsite} /> 
                    </Col>
                );
            })}
        </Row>  
    );
};

export default CampsitesList;