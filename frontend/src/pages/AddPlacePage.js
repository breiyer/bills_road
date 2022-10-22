import React, { useContext, useState, useEffect } from 'react'
import InputComponent from "../components/InputComponent"
import SelectComponent from "../components/SelectComponent"
import ButtonComponent from "../components/ButtonComponent"
import ProfilePictureComponent from "../components/ProfilePictureComponent"
import ImgCarro from "../img/carro.png"
import ImgProfile from "../img/man.png"
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { API_BASE_URL } from '../env'

export const AddPlacePage = () => {
  const { user, authTokens } = useContext(AuthContext)

  const navigate = useNavigate()

  const Back = () => {
    let path = `/home`
    navigate(path)
  }

  const getUserName = () => {
    return `${user.first_name} ${user.last_name}`
  }

  const [departamentos, setDepartamentos] = useState([])
  const [municipios, setMunicipios] = useState([])
  const [departamento, setDepartamento] = useState("")
  const [municipio, setMunicipio] = useState("")
  const [coddepartamento, setCoddepartamento] = useState("")
  const [codmunicipio, setCodmunicipio] = useState("")

  const fetchDepartamentos = async () => {
    const url = `https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=departamento,%20c_digo_dane_del_departamento&$group=departamento,c_digo_dane_del_departamento`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data, 'a')
    setDepartamentos(data)
  }

  const fetchMunicipios = async () => {
    const url = `https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${departamento}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data, 'a')
    setMunicipios(data)
  }

  const addPlace = async (e) => {
    e.preventDefault()

    const requestBody = {
      departamento: e.target.departamento.value,
      ciudad: e.target.ciudad.value,
      cod_departamento: e.target.cod_departamento.value,
      cod_ciudad: e.target.cod_ciudad.value,
      descripcion: e.target.descripcion.value,
    }

    const response = await fetch(`${API_BASE_URL}places_api/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authTokens.access}`,
      },
      body: JSON.stringify(requestBody)
    })
    // const data = await response.json()

    if (response.status === 201) {
      navigate('/home')
    } else {
      alert('Error inesperado, intente nuevamente')
    }
  }

  // Antes de renderizar el componente, llama a esta función
  useEffect(() => {
    fetchDepartamentos()
  }, [])

  // Cuando el state departamento cambie, se ejecuta esta función
  useEffect(() => {
    fetchMunicipios()
    const index = departamentos.findIndex(d => d.departamento === departamento)
    // console.log(departamentos, departamento, departamentos[index], 'dd')
    setCoddepartamento(departamento ? departamentos[index].c_digo_dane_del_departamento : "")
  }, [departamento])

  // Cuando el state municipio cambie, se ejecuta esta función
  useEffect(() => {
    const index = municipios.findIndex(d => d.departamento === departamento)
    // console.log(municipios, municipio, municipios[index], 'mm')
    setCodmunicipio(municipio ? municipios[index].c_digo_dane_del_municipio : "")
  }, [municipio])



  return (
    <div className="container-fluid AppContainer" >
      <div className="row justify-content-between align-items-start">
        <img className="ImgF col-auto" src={ImgCarro} alt="" />
        <ProfilePictureComponent componentClass="col-auto" name={getUserName()} photo={ImgProfile} />
      </div>

      <div className="row justify-content-center align-items-center">

        <div className="col-8 justify-contet-start TitlesContainer">
          <h1 className="Title2Above">Añadir lugar</h1>
          <h2 className="Title2">Formulario para creacion de lugar</h2>
        </div>

        <div className="w-100"></div>

        <div className="col-8 FormContainer2">
          <form className="row m-5 p-3" onSubmit={addPlace}>

            <div className="col-6 mb-4">
              <SelectComponent
                name="ciudad"
                title="ciudad"
                label="Ciudad"
                data={municipios}
                dataKey="municipio"
                handleChange={(e) => {
                  setMunicipio(e.target.value)
                }}
              />
            </div>

            <div className="col-6 mb-4">
              <SelectComponent
                name="departamento"
                title="departamento"
                label="Departamento"
                data={departamentos}
                dataKey="departamento"
                handleChange={async (e) => {
                  setDepartamento(e.target.value)
                }}
              />
            </div>

            <div className="col-6 mb-4">
              <InputComponent value={codmunicipio} disabled name="cod_ciudad" label="Codigo dane municipio" type="text" placeholder="Codigo dane municipio" />
            </div>

            <div className="col-6 mb-4">
              <InputComponent value={coddepartamento} disabled name="cod_departamento" label="Codigo dane departamento" type="text" placeholder="Codigo dane departamento" />
            </div>

            <div className="col-6 mb-4">
              <InputComponent name="descripcion" label="Descripción" type="text" />
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-auto">
                <ButtonComponent type="button" onClick={Back} text="ATRÁS" />
              </div>
              <div className="col-auto me-5">
                <ButtonComponent type="submit" text="GUARDAR" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
