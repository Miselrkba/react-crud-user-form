import React from "react";

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

  const headers = ["Number", "First Name", "Last Name", "Email", "Telephone"];

  const generateHeaders = headers.map((header) => (
    <th key={header}>{header}</th>
  ));
  const generateUserData = usersData.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.telephone}</td>
    </tr>
  ));

  return (
    <div style={{ margin: "2em" }}>
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
