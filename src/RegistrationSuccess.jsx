import React from "react";
import { MDBContainer, MDBCard, MDBCardBody } from "mdb-react-ui-kit";

function RegistrationSuccess() {
  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/f8/df/e3/f8dfe37d4c8c486a24de08a5100b128f.jpg)", // Same background image for consistency
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-5 text-center">
          <h2 className="text-uppercase mb-4">Registration Successful!</h2>
          <p>Your account has been created successfully. You can now log in.</p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default RegistrationSuccess;

