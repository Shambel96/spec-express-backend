let users =[
];
let idCount = 1;

export const createUser = (req, res)=>{
const {name, email, password} = req.body;
if (!req.body.name || !req.body.email || !req.body.password) {
return res.status(400).json({ message: 'All fields are required' });
}
const newUser={
    id:idCount++,
    name,
    email,
    password
}

users.push(newUser);

res.status(201).json(users);
}

export const updateUser = (req, res, next) => {
  const id = parseInt(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return next(new Error("User not found"));
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.password = req.body.password || user.password;

  res.json(user);
};

export const findAllUsers = (req, res)=>{
    res.json(users);
}
export const findUserById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return next(new Error("User not found"));
  }

  res.json(user);
};

export const deleteUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return next(new Error("User not found"));
  }

  users.splice(index, 1);

  res.json({ message: "User deleted successfully" });
};