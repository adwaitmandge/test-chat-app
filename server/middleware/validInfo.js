const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validInfo = (req, res, next) => {
  const {
    username,
    registrationId,
    password,
    email,
    fieldOfInterest,
    role,
    education,
  } = req.body;
  console.log(
    username,
    registrationId,
    password,
    email,
    fieldOfInterest,
    role,
    education
  );
  console.log("Inside valid info");
  //MISSING CREDENTIALS
  if (req.path === "/register") {
    if (
      ![
        email,
        password,
        registrationId,
        username,
        fieldOfInterest,
        role,
        education,
      ].every(Boolean)
    ) {
      return res.status(401).json("MISSING CREDENTIALS");
    } else if (!validateEmail(email)) {
      return res.status(401).json("INVALID EMAIL");
    }
  } else if (req.path === "/login") {
    console.log("idhar");
    if (![username, password].every(Boolean)) {
      return res.status(401).json("MISSING CREDENTIALS");
    }
  }
  console.log("Info is valid");
  next();
};

module.exports.validInfo = validInfo;
module.exports.validateEmail = validateEmail;
