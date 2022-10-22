import React from 'react'
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from "react-router-dom"
import InputComponent from "../components/InputComponent"
import ButtonComponent from "../components/ButtonComponent"
import ImgCarro from "../img/carro.png"
import { API_BASE_URL } from '../env'

export const PasswordResetPage = () => {
  const { token } = useParams()
  let navigate = useNavigate()

  const resetPassword = async (e) => {
    e.preventDefault()

    console.log(token, 'a')
    if (e.target.password.value !== e.target.password2.value) return alert('Las contraseñas deben coincidir')

    const requestBody = {
      password: e.target.password.value,
      token,
    }

    const response = await fetch(`${API_BASE_URL}api/password_reset/confirm/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
      },
      body: JSON.stringify(requestBody)
    })
    const data = await response.json()
  
    if (response.status === 200) {
      alert('Contraseña restablecida con éxito')
      navigate('/login')
    } else {
      data.detail && alert(data.detail)
      data.password && alert(data.password.reduce((p, c) => `${p}\n${c}`))
    }
  }


  return (
    <div class="container-fluid AppContainer pb-5" >
      <div class="row justify-content-between align-items-start">
        <img class="ImgF" src={ImgCarro} alt=""/>
        <h1 class="TitleApp pt-2">bills road</h1>
      </div>

      <div class="row justify-content-center align-items-center">
        <div class="col-xl-4 col-md-8 col-10 p-0 FormContainer">
          <div class="TitleContainer">
            <h2 class="Title text-center TitleCoco">Cambiar contraseña</h2>
          </div>
          <div class="row text-center justify-content-center m-5">
            <Form onSubmit={resetPassword}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputComponent type="password" name="password" placeholder="Nueva contraseña" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputComponent type="password" name="password2" placeholder="Repetir contraseña" />
              </Form.Group>
              <ButtonComponent type="submit" text="CAMBIAR" />
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
