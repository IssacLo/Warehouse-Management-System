import EditFormComponent from "../../../../component/EditForm/EditFormComponent";

function EditForm(props) {
  const { item, currentUser, setCurrentUser } = props;
  // console.log(currentUser, "item");

  return (
    <div>
      <EditFormComponent item={item} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default EditForm;
