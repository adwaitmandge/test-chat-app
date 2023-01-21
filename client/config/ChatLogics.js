const getSender = (loggedUser, users) => {
  console.log("The logged user is ", loggedUser);
  console.log("Users are", users)
  return users[0]._id === loggedUser._id
    ? users[1].username
    : users[0].username;
};

export default getSender;
