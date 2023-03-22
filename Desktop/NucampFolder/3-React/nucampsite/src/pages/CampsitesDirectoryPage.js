import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
    const [campsiteId, setCampsiteId] = useState(0);  //useState() hook passes value to campsiteId and setCampsiteId, 0 is first value in campsites array
    const selectedCampsite = selectCampsiteById(campsiteId);  //use campsiteId to get object selectCampsiteById to store in selectedCampsite variable

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>       
                    <CampsitesList setCampsiteId={setCampsiteId} />  
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;