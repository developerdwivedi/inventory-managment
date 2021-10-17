import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddInventory from './components/classComponent';
import AddProduct from './components/funcComponent';
import { Navbar, Container,Nav,Alert } from "react-bootstrap";

// import './App.css';

function App() {
  const admiUser = {
    email: "shaileshbaba728@gmail.com",
    password: "shailesh123"
  }  

  const [user, setUser] = useState({name: "", email: ""});
  const [ error, setError] = useState("");

  const Login = details => {
    //console.log(details); 

    if (details.email == admiUser.email && details.password ==  admiUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError([
        'danger'
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
         Details do not match!
        </Alert>
      )));
    }
  }

  const Logout = () => {
    setUser({ name: "", email: ""});
  }
   
  return (
    <div className="App">
          {(user.email != "") ? (
            <>
             <Navbar bg="primary" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Inventory</Navbar.Brand>
                    <Nav>
                    <Nav.Link href="#home">  <button variant="success" className="button" onClick={Logout}>Logout</button>{' '}</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                <AddInventory/>
                <AddProduct/>
                </>
            //<div className="welcome">
            // <h2>welcome <span>{user.name}</span></h2>
            // <h1>Product Inventory form by Reactjs</h1>
            //</div>
          ) : (
            <LoginForm Login={Login} error={error} />
                
          )}
    </div>
  );
}

export default App;
