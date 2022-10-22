import React from 'react'
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import InputComponent from "../components/InputComponent"
import ButtonComponent from "../components/ButtonComponent"
import ImgCarro from "../img/carro.png"
import { API_BASE_URL } from '../env'

export const PasswordRecoveryPage = () => {
  let navigate = useNavigate()
  const Back = () => {
    let path = `/login`
    navigate(path)
  }

  const sendResetPassEmail = async (e) => {
    e.preventDefault()

    const requestBody = {
      email: e.target.email.value,
    }

    const response = await fetch(`${API_BASE_URL}api/password_reset/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
      },
      body: JSON.stringify(requestBody)
    })
    const data = await response.json()
  
    if (response.status === 200) {
      alert('Email de recuperación enviado')
      navigate('/login')
    } else {
      alert(data.detail)
    }
  }

  return (
    <div className="container-fluid AppContainer pb-5" >
      <div className="row justify-content-between align-items-start">
        <img className="ImgF" src={ImgCarro} alt="" />
        <h1 className="TitleApp pt-2">bills road</h1>
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col-xl-4 col-md-8 col-10 p-0 FormContainer">
          <div className="TitleContainer">
            <h2 className="Title text-center TitleCoco">Recuperar contraseña</h2>
          </div>
          <div className="row text-center justify-content-center m-5">
            <Form onSubmit={sendResetPassEmail}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputComponent type="email" name="email" placeholder="Escribe aqui tu correo" />
              </Form.Group>
              <ButtonComponent type="button" onClick={Back} text="ATRÁS" />
              <ButtonComponent type="submit" text="RECUPERAR" />
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
