import React from "react";
import { useState } from "react";

function Table() {
  const usersData = [
    {
      id: 1,
      firstName: "Tania",
      lastName: "floppydiskette",
      email: "dsadsad@gmail.com",
      telephone: "123135",
    },
    {
      id: 2,
      firstName: "Mario",
      lastName: "Jeremy",
      email: "duytuyusad@gmail.com",
      telephone: "123135",
    },
    {
      id: 3,
      firstName: "Robbie",
      lastName: "Lawrel",
      email: "drewrewd@gmail.com",
      telephone: "123135",
    },
  ];

  const initialFormState = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
  };
  const [users, setUsers] = useState(usersData);
  const [user, setUser] = useState(initialFormState);

  const headers = [
    "Number",
    "First Name",
    "Last Name",
    "Email",
    "Telephone",
    "Actions",
  ];

  const generateHeaders = headers.map((header) => (
    <th key={header}>{header}</th>
  ));
  const generateUserData = users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.telephone}</td>
      <td>
        <a href="/#">Edit</a>
        <br />
        <a href="/#">Delete</a>
      </td>
    </tr>
  ));

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    //setting value of first name, last name, email and telephone to 
    //input value
  };

  return (
    <div style={{ margin: "2em" }}>
      <h1>Crud Table</h1>
      <p>Add new user:</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.firstName || !user.lastName) return;
          addUser(user);
          setUser(initialFormState);
        }}
      >
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleInputChange}
        />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleInputChange}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
        <label htmlFor="">Telephone</label>
        <input
          type="text"
          name="telephone"
          value={user.telephone}
          onChange={handleInputChange}
        />
        <button>Add new user</button>
      </form>
      <table className="table">
        <thead>
          <tr>{generateHeaders}</tr>
        </thead>
        <tbody>
          {usersData.length > 0 ? (
            generateUserData
          ) : (
            <tr>
              <td colSpan={6}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
