import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faCalendarWeek,
  faUserFriends,
  faFileAlt,
  faSignOutAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../Contexts/AuthContext";

const Sidebar = () => {
  const { logout, loggedInUser } = useAuth();
  const [doctor, setDoctor] = useState(false);
  const styles = {
    backgroundColor: "#19D3AE",
    color: "white",
    height: "100vh",
    marginLeft: "-24px",
    paddingLeft: "24px",
    paddingTop: "10%",
  };
  const logoutPosition = {
    position: "absolute",
    bottom: "30px",
  };
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  useEffect(() => {
    fetch("https://doctors-portal-server-5nzs.onrender.com/isDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);
  return (
    <div style={styles}>
      <h4 style={{ paddingBottom: "20%" }}>{loggedInUser.displayName}</h4>
      <Link style={linkStyle} to="/dashboard">
        <div className="d-flex align-items-center mb-4">
          <FontAwesomeIcon icon={faTh} />
          <h5 className="ms-3 mb-0">Dashboard</h5>
        </div>
      </Link>
      <Link style={linkStyle} to="/appointments">
        <div className="d-flex align-items-center mb-4">
          <FontAwesomeIcon icon={faCalendarWeek} />
          <h5 className="ms-3 mb-0">Appointment</h5>
        </div>
      </Link>
      {doctor && (
        <div>
          <Link style={linkStyle} to="/patients">
            <div className="d-flex align-items-center mb-4">
              <FontAwesomeIcon icon={faUserFriends} />
              <h5 className="ms-3 mb-0">Patients</h5>
            </div>
          </Link>
          <Link style={linkStyle} to="/prescription">
            <div className="d-flex align-items-center mb-4">
              <FontAwesomeIcon icon={faFileAlt} />
              <h5 className="ms-3 mb-0">Prescriptions</h5>
            </div>
          </Link>
          <Link style={linkStyle} to="/addDoctor">
            <div className="d-flex align-items-center mb-4">
              <FontAwesomeIcon icon={faUserPlus} />
              <h5 className="ms-3 mb-0">Add Doctor</h5>
            </div>
          </Link>
        </div>
      )}
      <div
        onClick={logout}
        type="button"
        className="d-flex align-items-center mb-4"
        style={logoutPosition}
      >
        <FontAwesomeIcon icon={faSignOutAlt} />
        <h5 className="ms-3 mb-0">Log Out</h5>
      </div>
    </div>
  );
};

export default Sidebar;
