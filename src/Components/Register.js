import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

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
        passError: "",
        error : false
    })
    let nav = useNavigate();



    const handleChange=(e)=>{
        setData({ ...data, [e.target.name] : e.target.value});
    }

    const handleSubmit=e=>{
        e.preventDefault();
        if(errors.error == false) {
          axios.post("./validate.php", data)
          .then((result)=>{
            if(result.data) {
                alert("success");
                nav("/pricing");
              
            }
            else {
              alert("Error");
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
    >
  <Form.Group className="mb-4" controlId="formEmail">
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
        
    />
    <Form.Text className = "text-danger">{errors.passError}</Form.Text>

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