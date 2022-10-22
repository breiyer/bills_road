import "../css/components/InputComponents.css"
export default function InputComponents(props) {
  return (
    <div className={`InputA ${props.componentClass}`}>
      <label>{props.label}</label>
      <input disabled={props.disabled || 0} value={props.value} name={props.name} type={props.type} placeholder={props.placeholder} />
    </div>
  )
}
