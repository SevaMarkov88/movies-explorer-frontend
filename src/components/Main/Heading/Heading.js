import './Heading.css';

function Heading(props) {
  return (
    <>
      <h2 className='heading__text'>{props.text}</h2>
      <hr className='heading__line' />
    </>
  );
}

export default Heading;
