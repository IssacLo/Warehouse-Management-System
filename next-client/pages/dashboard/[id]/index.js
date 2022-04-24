import DashBoardComponentId from "../../../component/DashBoardId/DashBoardIdComponent";

function DashBoardId(props) {
  const { item, currentUser, setCurrentUser } = props;
  // console.log(currentUser, "item");

  return (
    <div>
      <DashBoardComponentId item={item} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default DashBoardId;
