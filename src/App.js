import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import ListOfUsers from './ListOfUsers';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  return (
    <div className="App" style={{display:"flex" }}>
     <ListOfUsers user={users} /> 
 </div>
  );
}

export default App;
