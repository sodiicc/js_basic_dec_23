export default function TodoItem(props) {
  return (
    <div style={{backgroundColor: props.bgColor, padding: '0.5rem 1rem', margin: '0.5rem 1rem'}}>
        <h4 style={{color: props.color}}>{props.text}</h4>
    </div>
  )
}
