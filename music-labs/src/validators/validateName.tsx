const validateName = (name: string) => {
  var nameRegex = new RegExp(/^[A-Z][a-z]+\s[A-Z][a-z]+$/);

  return nameRegex.test(name) && name.length <= 50;
};

export default validateName;
