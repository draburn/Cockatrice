// eslint-disable-next-line
import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Field, reduxForm } from "redux-form"

import Button from "@material-ui/core/Button";

import { InputField } from "components";
import { FormKey } from 'types';

import "./ConnectForm.css";

const ConnectForm = ({ handleSubmit }) => (
  <Form className="connectForm" onSubmit={handleSubmit}>
    <div className="connectForm-item">
      <Field label="Host" name="host" component={InputField} />
    </div>
    <div className="connectForm-item">
      <Field label="Port" name="port" component={InputField} />
    </div>
    <div className="connectForm-item">
      <Field label="User" name="user" component={InputField} autoComplete="username" />
    </div>
    <div className="connectForm-item">
      <Field label="Pass" name="pass" type="password" component={InputField} autoComplete="current-password" />
    </div>
    <Button className="connectForm-submit" color="primary" variant="contained" type="submit">
      Connect
    </Button>
  </Form>
);

const propsMap = {
  form: FormKey.CONNECT
};

const mapStateToProps = () => ({
  initialValues: {
    // host: "mtg.tetrarch.co/servatrice",
    // port: "443"
    host: "server.cockatrice.us",
    port: "4748"
  }
});

export default connect(mapStateToProps)(reduxForm(propsMap)(ConnectForm));
