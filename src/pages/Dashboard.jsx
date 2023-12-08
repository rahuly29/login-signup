import React from "react";
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div>
      <header>
        <h1>Dashboard</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#analytics">About</a>
          </li>
          <li>
            <a href="#repots">Services</a>
          </li>
          <li>
            <a href="#setting">contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="card">
          <div className="profile-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU" alt="profile" /></div>
          <h2 className="name">John Deo</h2>
          <p className="job-title">Software developer</p>
          <p className="about-me">
            A brief description about yourself and your interests. You can
            include some personal information, skills, or hobbies.
          </p>
        </div>

      </main>
      <footer>
        <p>© 2023 React dashboard</p>
      </footer>
    </div>
  );
};

export default Dashboard;
