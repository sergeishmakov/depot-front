export const validating = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if ((values.password || []).length < 5) {
    errors.password = "Password is too short";
  }
  if (!values.confirm) {
    errors.confirm = "Required";
  }
  if (values.confirm !== values.password) {
    errors.confirm = "Does not match";
  }
  return Object.keys(errors).length ? errors : "";
};
