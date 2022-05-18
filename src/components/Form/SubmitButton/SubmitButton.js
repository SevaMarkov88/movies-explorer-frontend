import './SubmitButton.css';

function SubmitButton(props) {
  return (
    <input
      className={`submit-button submit-button_active_${props.submitPossible}`}
      type='submit'
      value={props.label}
      disabled={!props.submitPossible}
    />
  );
}

export default SubmitButton;
