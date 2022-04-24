import SigninComponent from "../../component/Signin/SigninComponent";

function SignIn(props) {
  const { item, currentUser, setCurrentUser } = props;

  return (
    <div>
      <SigninComponent item={item} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default SignIn;
