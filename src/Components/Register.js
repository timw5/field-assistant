import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Register= () => {
    const [data, setData] = useState({
        email:"",
        pass:"",
        fname:"",
        confpass : "",
        lname:"",
    })

    const [errors, setErrors] = useState({
      emailError:"",
      passError:"",
      error: false
    });

    let nav = useNavigate();

    const swal = withReactContent(Swal);

    


    const handleChange=(e)=>{
        setData({ ...data, [e.target.name] : e.target.value});
    }

    const handleSubmit=e=>{
        e.preventDefault();
        if(!errors.error) {
          axios.post("http://localhost:80/validate.php", data)
          .then((result)=>{
            if(result.data) {
                swal.fire({
                  html: <h3 className='text-success'>Success</h3>,
                  icon: 'success'
                });
                nav("/profile");
              
            }
            else {
              swal.fire({
                  title: <h3 className="text-danger">That email is already Registered</h3>,
                  icon: 'error',
                  footer: " <button class=\"btn btn-success\" type=\"button\" href=\"/login\"> Try Logging In </button>"
              })
            }
          })
        }
        else {
          setErrors({...errors, passError:"Please fix the error and try again", error:true})
        }
    }

    const check= () =>{

        if(data.pass !== data.confpass) {
          setErrors({...errors, passError: "Passwords Don't Match", error:true });
        }
        else {
          setErrors({...errors, passError: "", error:false })
        }

    }

    return (
    <Container>
            
      <Form
        onSubmit={handleSubmit}
        isinvalid={errors.error}
        error={errors.error}
      >
      <Form.Group 
        className="mb-4" 
        controlId="formEmail"
        >
       <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          name="email" 
          required="required"
          placeholder="Enter email" 
          onChange={handleChange}
          value = {data.email}
        />
      </Form.Group>

      <Form.Group className='mb-4' controlId="formFname">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type = "text" 
            name = "fname"
            required="required" 
            placeholder='First Name'
            onChange={handleChange}
            value = {data.fname}
        />
      </Form.Group>
          
      <Form.Group className='mb-4' controlId="formLname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type = "text" 
            name = "lname" 
            required="required"
            placeholder='Last Name'
            onChange={handleChange}
            value = {data.lname}
        />
      </Form.Group>
          
      <Form.Group className="mb-4" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
            type="password" 
            name = "pass" 
            placeholder="Password"
            required="required"
            onChange={handleChange}
            onKeyUp={check}
            value = {data.pass}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formconfPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control 
            type="password" 
            name = "confpass" 
            placeholder="Confirm Password"
            required="required"
            value = {data.confpass}
            onChange={handleChange}
            onKeyUp={check}
            isInvalid={errors.error} 
        />
        <Form.Control.Feedback className = "text-danger" type="invalid">{errors.passError}</Form.Control.Feedback>

      </Form.Group>



    <Button 
      className="mr-4" 
      variant="primary" 
      type="submit"
      >
      Submit
    </Button>

    <Form.Text className="text-muted ms-4 mt-4">
        Already have an account? Login <Link className='ml-4 link-primary' to="/login">Here</Link>
      </Form.Text>

  </Form>
    </Container>   
    );
}
export default Register