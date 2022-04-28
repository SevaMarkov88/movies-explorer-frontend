import './Input.css';

function Input(props) {
  return (
    <label className='input__outside'>
      {props.label}
      <input
        className={`input__inside ${props.errors ? 'input__inside__error' : ''}`}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={props.name}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
      />
      {props.errors && <p className='input__error'>{props.errors}</p>}
    </label>
  )
}

export default Input;
