import ImgCruz from "../img/cruz.svg"
import "../css/components/AddPlaceBtn.css"

export default function AddPlaceBtn(props) {
  return (
    props.showBtn && <img className="ImgH ms-2" onClick={props.handleClick} src={ImgCruz} alt="" />
  )
}
