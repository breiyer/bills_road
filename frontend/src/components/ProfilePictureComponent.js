import React, { useContext } from 'react'
import "../css/components/ProfilePictureComponent.css"
import Dropdown from 'react-bootstrap/Dropdown'
import AuthContext from '../context/AuthContext'

export default function ProfilePicture(props) {
  const { logoutUser } = useContext(AuthContext)

  return (
    <div className={`ProfilePicture ${props.componentClass}`}>
      <label className="ProfilePicture__name">{props.name}</label>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <img className="ProfilePicture__img" src={props.photo} alt="" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={logoutUser}>Cerrar sesión</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
