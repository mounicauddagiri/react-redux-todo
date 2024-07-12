import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const usersPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://randomuser.me/api/?page=${currentPage}&results=${usersPerPage}`
      );
      const data = await res.json();
      setUsers(data.results);
      setTotalPages(Math.ceil(100 / usersPerPage)); // Assuming there are 100 users available
    };
    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
      <button onClick={handlePrevPage}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
      <p>
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
}

export default Users;
