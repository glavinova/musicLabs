const validatePassword = (password: string) => {
  var passwordRegex = new RegExp(
    //the original password regex `^(?=.*[A-Z])(?=.*[!@#$%^&*])(^.{8,40}$)`
    `(^.{6,40}$)` //shortened password regex
  );
  return passwordRegex.test(password);
};

export default validatePassword;
