import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import ReusableForm from "./components/ReusableFrom/ReusableForm";

function App() {
  // const handleSignUp = (data) => {
  //   console.log("Sign Up data : ", data);
  // };

  // const handleProfileUpdate = (data) => {
  //   console.log("Update data : ", data);
  // };

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm 
        formTitle={"Sign UP"} 
        handleSubmit={handleSignUp}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm> */}
      <br />
      {/* <ReusableForm
        formTitle={"Profile Update"}
        submitBtnTxt="Update"
        handleSubmit={handleProfileUpdate}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Alwayes keep your profiel updated</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
