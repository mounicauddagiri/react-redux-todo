import React, { useState, useEffect } from 'react';
import './style.css';
import Users from './components/lazyloading';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count = {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}> Reset</button>
    </div>
  );
}

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [newUserName, setNewUserName] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await res.json();
//       setUsers(data);
//       console.log(data);
//     };
//     fetchData();
//   }, []);

//   const addUser = async () => {
//     if (newUserName.trim() === '') {
//       alert('Please enter a valid name');
//       return;
//     }
//     const newUser = {
//       name: newUserName,
//     };
//     const res = await fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(newUser),
//     });

//     const addedUser = await res.json();

//     setUsers([...users, { ...addedUser, id: users.length + 1 }]);
//     setNewUserName('');
//   };

//   return (
//     <div>
//       <h1>Users List</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={newUserName}
//         onChange={(e) => setNewUserName(e.target.value)}
//       />
//       <button onClick={addUser}>Add User</button>
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Users />
    </div>
  );
}
