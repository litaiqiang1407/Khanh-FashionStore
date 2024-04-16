import { Form } from "react-bootstrap";

function Login() {
  return (
    <Form>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" placeholder="Enter phone"></Form.Control>
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
        ></Form.Control>
      </Form.Group>
    </Form>
  );
}

export default Login;