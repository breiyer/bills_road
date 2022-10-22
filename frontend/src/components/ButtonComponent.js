import "../css/components/ButtonComponents.css"
export default function ButtonComponents(props) {
  return (
    <button className="Button me-3" onClick={props.onClick} type={props.type}>
        { props.text }
    </button>
  )
}
