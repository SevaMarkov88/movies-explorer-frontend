import './Form.css';

function Form(props) {
  return (
    <form onSubmit={props.onSubmit} className='form'>
      {props.children}
    </form>
  );
}

export default Form;
