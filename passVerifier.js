module.exports = (pasw) => {
  if (!pasw) return "Password can not be null";
  const reCond = [
    new RegExp(".{8,}"),
    new RegExp("[A-Z]"),
    new RegExp("[a-z]"),
    new RegExp("[0-9]"),
  ];
  const errMessages = [
    "Password should contain at least 8 characters",
    "Password should contain at least 1 capital letter",
    "Password should contain at least 1 lowercase letter",
    "Password should contain at least 1 number",
  ];
  const matchCond = reCond.map((el) => el.test(pasw));
  conds = matchCond.reduce((acc, el) => acc + el);
  let msg = "";
  for (let i = 0; i < 4; i++) {
    if (!matchCond[i]) {
      msg = errMessages[i];
      break;
    }
  }
  //Second feature
  if (conds === 3) {
    msg = "";
  }

  // Third feature

  if (conds === 3 && !matchCond[2]) {
    msg = errMessages[2];
  }
  return msg ? msg : true;
};
