import AddCarForm from "../../components/UI/AddCarForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddCar() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        < AddCarForm />
                    </Col>
                </Row>
            </Container>
        </>
    )

}
export default AddCar;