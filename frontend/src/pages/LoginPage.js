import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import Form from 'react-bootstrap/Form'
import {
  Link
} from "react-router-dom";
import InputComponent from "../components/InputComponent"
import ButtonComponent from "../components/ButtonComponent"
import ImgCarro from "../img/carro.png" 

export default () => {

  const { loginUser } = useContext(AuthContext)

  return (
    <div className="container-fluid AppContainer" >
    <div className="row justify-content-between align-items-start">
      <img className="ImgF" src={ImgCarro} alt=""/>
      <h1 className="TitleApp pt-2">bills road</h1>
    </div>

    <div className="row justify-content-center align-items-center">
      <div className="col-xl-4 col-md-8 col-10 p-0 FormContainer">
        <div className="TitleContainer">
          <h2 className="Title text-center TitleCoco">Inicio de sesión</h2>
        </div>
        <div className="row text-center justify-content-center m-5">
          <Form onSubmit={loginUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <InputComponent name="username" componentClass="align-items-center" type="text" placeholder="Usuario" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <InputComponent name="password" componentClass="align-items-center" type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-5 text-end" controlId="formBasicLabel">
              <Link className="LinkLabel" to="/password/recovery" >¿Olvidaste la contraseña?</Link>
            </Form.Group>
            <ButtonComponent type="submit" text="ENTRAR" />
          </Form>
        </div>
      </div>
    </div>
  </div>
  )
}
