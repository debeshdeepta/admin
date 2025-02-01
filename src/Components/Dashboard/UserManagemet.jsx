import React from "react";
import "./UserManagement.css";

const users = [
  {
    name: "Yeray Rosalos",
    email: "yerayrosales@gmail.com",
    phone: "+91-098765432",
    sold: 2,
    bought: 1,
    blocked: false,
    rating: 3.5,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Talah Cotton",
    email: "talahcotton42@gmail.com",
    phone: "+91-098765432",
    sold: 0,
    bought: 5,
    blocked: true,
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  // Repeat similar user objects to match the UI
];

const UserManagement = () => {
  return (
    <div className="user-management">
      {/* <div className="search-container">
        <input type="text" placeholder="Search user by their name" />
        <button className="search-btn">Search</button>
      </div> */}

      <table className="user-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>User Deal</th>
            <th>Block / Unblock</th>
            <th>Ratings</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="user-info">
                <img src={user.image} alt={user.name} className="user-avatar" />
                <div>
                  <strong>{user.name}</strong>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                </div>
              </td>
              <td className="user-deal">
                <span className="sold">{user.sold} Sold</span>
                <span className="bought">{user.bought} Bought</span>
              </td>
              <td>
                <button className={user.blocked ? "unblock-btn" : "block-btn"}>
                  {user.blocked ? "Unblock" : "Block"}
                </button>
              </td>
              <td className="ratings">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className={i + 1 <= Math.round(user.rating) ? "star filled" : "star"}
                    >
                      ★
                    </span>
                  ))}
              </td>
              <td>
                <button className="action-btn">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className="delete-btn">Delete</button>
        <span>Displaying page</span>
        <button className="page-btn">First</button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">4</button>
        <button className="page-btn">5</button>
        <button className="page-btn">6</button>
        <button className="page-btn">Last</button>
      </div>
    </div>
  );
};

export default UserManagement;
