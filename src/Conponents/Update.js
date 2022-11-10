import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const userData = useLoaderData();
  const [user, setUser] = useState(userData);
  const fromSubmit = (e) => {
    console.log(user)
    e.preventDefault();
    fetch(`http://localhost:5000/user/${userData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("data inserted successfully");
          e.target.reset();
        }
      });
  };

  const afterBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[name] = value;
    setUser(newUser);
  };

  return (
    <div>
      <h1>Update details: {userData.name}</h1>

      <form action="" onSubmit={fromSubmit}>
        <input
          onBlur={afterBlur}
          type="email"
          name="email"
          id=""
          placeholder="email"
          defaultValue={userData.email}
        />
        <input
          onBlur={afterBlur}
          type="text"
          name="name"
          id=""
          placeholder="name"
          defaultValue={userData.name}
        />
        <input
          onBlur={afterBlur}
          type="text"
          name="Address"
          id=""
          placeholder="address"
          defaultValue={userData.Address}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Update;
