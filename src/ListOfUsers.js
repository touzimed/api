import React from 'react';

export default function ListOfUsers({ user }) {
  
  return (
    <div tyle={{ display: "flex"}}>
     { user.map((e)=>
     
     
     <div   style={{
     backgroundColor: "red",
     marginBottom: "10px",
     padding: "10px",
     borderRadius:"20px"}}>
      <h1>Name:{e.name}</h1>
      <h1>User name is :{e.username}</h1>
      <h2>His adress street is :{e.address.street}</h2>
      <br/>

      </div>)} 
     <br/>
    </div>
  );
}
