import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Register", { name, email, password })
      .then((result) => {
        setMessage(result.data.message);
      })
      .catch((err) => {
        setMessage(
          err.response?.data?.error || "An error occurred. Please try again."
        );
      });
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/f8/df/e3/f8dfe37d4c8c486a24de08a5100b128f.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MDBCard
        className="m-5"
        style={{
          maxWidth: "600px",
          zIndex: 2,
          backgroundColor: "lightgreen", // Light green background
          border: "2px solid black", // Black border
          borderRadius: "15px", // Rounded corners
        }}
      >
        <form onSubmit={handleSubmit}>
          <MDBCardBody
            className="px-5 py-5" // Increased padding on all sides
            style={{
              padding: "30px", // Additional padding for custom spacing
            }}
          >
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>

            {message && (
              <p
                className="text-center mb-4"
                style={{
                  color: message.includes("successful") ? "green" : "red",
                }}
              >
                {message}
              </p>
            )}

            <MDBInput
              wrapperClass="mb-5"
              label="Your Name"
              size="lg"
              id="form1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-5"
              label="Your Email"
              size="lg"
              id="form2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-5"
              label="Password"
              size="lg"
              id="form3"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>
            <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg" type="submit">
              Register
            </MDBBtn>
            <h6>Already have an account?</h6>
            <Link to="/Login" className="mb-4 w-100 gradient-custom-4" size="lg">
              Login
            </Link>
          </MDBCardBody>
        </form>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
