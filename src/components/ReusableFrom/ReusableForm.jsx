import PropTypes from "prop-types";

const ReusableForm = ({
  // formTitle,
  handleSubmit,
  submitBtnTxt = "Submit",
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      {/* <h2>{formTitle}</h2> */}
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <br />
        <input type="submit" value={submitBtnTxt} />
      </form>
    </div>
  );
};

ReusableForm.propTypes = {
  formTitle: PropTypes.string,
  submitBtnTxt: PropTypes.string,
  handleSubmit: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default ReusableForm;
