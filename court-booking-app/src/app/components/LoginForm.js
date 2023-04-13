import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "./Button";

function LoginForm() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        buttonStyle="btn--outline"
        buttonSize="btn--medium"
      >
        Sign up
      </Button>

      <Button buttonStyle="btn--outline" buttonSize="btn--medium">
        Log in
      </Button>

      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Create an account
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={() => {
              return (
                <>
                  <h1>welcome</h1>
                </>
              );
            }}
          >
            <Form>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Field
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                />
                <ErrorMessage name="username">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Field
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
                <ErrorMessage name="password">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                type="submit"
                color="primary"
              >
                Log in
              </Button>
              <>or</>
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                type="submit"
                color="primary"
              >
                Sign up with Google
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
}

export default LoginForm;
