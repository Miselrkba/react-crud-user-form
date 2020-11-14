import React, { useState } from "react";
import UserTable from "./UserTable";
import AddUserForm from './AddUserForm'

const App = () => {
  const initialBookState = {
    title: "",
    available: false,
  };
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];
  const [users, setUsers] = useState(usersData);
  const [book, setBook] = useState(usersData);

  const updateBook = (book) => {
    setBook({ title: book.title, available: book.available });
  };

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
