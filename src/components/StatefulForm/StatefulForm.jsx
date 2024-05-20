import { useState } from "react";

const StatefulForm = () => {
  //Declaring state variable
  const [name, setName] = useState(`abc`);
  const [email, setEmail] = useState(`abc@gmail.com`);
  const [password, setPassword] = useState(123456);
  const [error, setError] = useState("");

  //Submit button handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError(`Password can not be less then 6 chararcter`);
    } else {
      setError("");
      console.log(name, email, password);
    }

    // console.log(`Current Name: ${name}`);
    // console.log(`Current Email: ${email}`);
    // console.log(`Current Password: ${password}`);
  };

  // Name,Email and Password handler
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          name="email"
        />
        <br />
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          name="password"
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefulForm;
