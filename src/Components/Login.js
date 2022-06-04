import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
function Login() {
    return(
    <>
    <Container>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button classname="mr-4 mt-2" variant="primary" type="submit">
    Submit
  </Button>
  <Form.Text className="text-muted ms-4 mt-2">
      Need an account? Register <Link className='ml-4 link-primary' to="/register">Here</Link>
    </Form.Text>
</Form>
    </Container>   
    </>
    );

function ajax() {

}
}
export default Login