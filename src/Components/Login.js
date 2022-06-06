import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const Login = () => {

  const [data, setData] = useState({
    email : "",
    pass : ""
  });

  const [errors, seterrors] = useState({
    userError: "",
    passError : "",
    error : false
  });

  const swal = withReactContent(Swal);
  let nav = useNavigate();

  const handlesubmit=(e) =>{
    e.preventDefault();
    axios.post("http://localhost:80/login.php", data)
    .then((result)=>{
        let res = result.data;
        if(res == "PassError") {
            seterrors({...errors, passError:"Password Incorrect", error:true});
        }
        else if(res == "UserError") {
            seterrors({...errors, userError:"Email not registered", error:true})
            swal.fire({
              title: "email not registered",
              icon: "warning",
              footer: "<button class=\"btn btn-success\">Create Account</button>",
              timer:2000
            })
        }
        else if(res || res == true){
          swal.fire({
            html: <h3 className='text-success'>Success</h3>,
            icon: 'success',
            timer: 1000
          });
          nav("/profile");
        }
        else {
          swal.fire({
            html: <h3 className='text-success'>Error, please try again</h3>,
            icon: 'warning',
            timer: 1000
          });
        }
        
      })
  };

  const handleChange=(e)=>{
    setData({ ...data, [e.target.name] : e.target.value});
    seterrors({...errors, error:false, userError:"", passError:""})
}

    return(
    <>
    <Container>
    <Form onSubmit={handlesubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
      type="email" 
      name="email" 
      required
      placeholder="Enter email" 
      onChange={handleChange}
      value={data.email} 
      isInvalid={errors.userError ? true : false}

      />
      <Form.Control.Feedback className = "text-danger" type="invalid">{errors.userError}</Form.Control.Feedback>

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
      type="password" 
      name="pass" 
      required
      placeholder="Password" 
      onChange={handleChange} 
      value={data.pass}
      isInvalid={errors.passError ? true : false}
    />
    <Form.Control.Feedback className = "text-danger" type="invalid">{errors.passError}</Form.Control.Feedback>

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


}
export default Login