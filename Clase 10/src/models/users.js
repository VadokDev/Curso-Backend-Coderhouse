const users = [];

const addUser = (id, name, lastname, photoUrl) => {
  const user = {
    id,
    name,
    lastname,
    photoUrl,
  };

  users.push(user);
};

const getUser = (userId) => users.find(({ id }) => id === userId);
const getUsers = () => users;

export { addUser, getUser, getUsers };
