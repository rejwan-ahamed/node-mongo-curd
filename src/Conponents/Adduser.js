import React, { useState } from "react";

const Adduser = () => {
  const [user, setUser] = useState({});
  const fromSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) =>{
        if(data.acknowledged === true){
            alert('data inserted successfully')
            e.target.reset()
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
      <h1>Add new user</h1>
      <form action="" onSubmit={fromSubmit}>
        <input
          onBlur={afterBlur}
          type="email"
          name="email"
          id=""
          placeholder="email"
        />
        <input
          onBlur={afterBlur}
          type="text"
          name="name"
          id=""
          placeholder="name"
        />
        <input
          onBlur={afterBlur}
          type="text"
          name="Address"
          id=""
          placeholder="address"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Adduser;
