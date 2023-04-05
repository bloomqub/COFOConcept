import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import NavigationBarFinal from '../Components/NavigationBarFinal';

function Contact() {
  return (
    <>
    <NavigationBarFinal/>
    <Form>
      <div> <h1>Contact me!</h1> </div>
      <p> If you have any questions fill out the form below</p>
      <Form.Group className="mb-3" controlId="ContactPageform">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Name" />
        <Form.Text className="text-muted">
  
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Email Address" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="Subject" placeholder="Subject" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicComments ">
        <Form.Label>Comments</Form.Label>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Send me copy" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Contact;