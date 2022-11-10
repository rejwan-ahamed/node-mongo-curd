import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const [users, setUsers] = useState(data);
  const deleteUser = (id) => {
    fetch(`http://localhost:5000/user/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => alert(result));
    const remaining = users.filter((user) => user._id !== id);
    setUsers(remaining);
  };
  return (
    <div>
      <h1>{users.length}</h1>
      {users.map((datas) => (
        <p>
          {datas.name} : {datas.email}{" "}
          <Link to={`update/${datas._id}`}><button>Update</button></Link>
          <button onClick={() => deleteUser(datas._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Home;
