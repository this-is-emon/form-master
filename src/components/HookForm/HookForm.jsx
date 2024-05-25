import useInputState from "../hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("Rojoni");
  const nameState = useInputState("Rojoni");

  const handleSubmit = (e) => {
    // console.log("form data", name);
    console.log("form data", nameState.value);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          //   onChange={handleNameChange}
          {...nameState}
          type="text"
          name="name"
        />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
