import { useState } from "react";

const useInputState = (defaultValue = null) => {

    /*
    const [name, setName] = useState(`abc`);
    const [email, setEmail] = useState(`abc@gmail.com`);
    const [password, setPassword] = useState(123456);
    const [error, setError] = useState("");
    */
    const [value, setValue] = useState(defaultValue);


    /*
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    */
    // const handleChange = e => {
    //     setValue(e.target.value);
    // }

    // return [value,handleChange]
    const onChange = e => {
        setValue(e.target.value);
    }

    return {value, onChange}
}

export default useInputState;