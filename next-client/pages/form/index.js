import FormComponent from "../../component/Form/FormComponent";

function Form(props) {
  const { item, currentUser, setCurrentUser } = props;

  return (
    <div>
      <FormComponent item={item} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default Form;
