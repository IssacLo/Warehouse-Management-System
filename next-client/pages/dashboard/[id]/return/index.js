import ReturnFormComponent from "../../../../component/ReturnForm/ReturnFormComponent";

function ReturnForm(props) {
  const { item, currentUser, setCurrentUser } = props;
  // console.log(currentUser, "item");

  return (
    <div>
      <ReturnFormComponent item={item} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default ReturnForm;
