import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarUser from "../components/NavbarUser";
import fire from "../files/firebase";
import "../profile.css";

export const Userprofile = () => {
  const location = useLocation();
  const profile = location.state.profile;
  const name = location.state.name;
  const email = location.state.email;
  const password = location.state.password;
  const mobile = location.state.mobile;
  console.log(profile, name, email, password, mobile);

  return (
    <div>
      <link
        href="../assets/css/material-dashboard.css?v=2.1.2"
        rel="stylesheet"
      />
      <NavbarUser profile={profile} email={email} />

      <div className="main-panel">
        <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
          <div class="container-fluid">
            <div class="navbar-wrapper"></div>
            <button
              class="navbar-toggler"
              id="pro-nav"
              type="button"
              data-toggle="collapse"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon icon-bar"></span>
              <span class="navbar-toggler-icon icon-bar"></span>
              <span class="navbar-toggler-icon icon-bar"></span>
            </button>
          </div>
        </nav>
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="profile"
            style={{
              fontFamily: "sans-serif",
              textAlign: "center",
              maxWidth: "350px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              padding: "100px",
              marginLeft: "200px",
            }}
          >
            <img
              src={profile}
              alt="Profile Image"
              className="profile__image"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "50%",
                margin: "0 auto 20px auto",
                display: "block",
                marginTop: "-8%",
              }}
            />
            <div
              className="profile__name"
              style={{ fontSize: "1.2em", fontWeight: "bold" }}
            >
              {name}
            </div>
            <br />
            <div className="profile__title" style={{ marginBottom: "20px" }}>
              {email}
            </div>

            <div
              className="profile__detail"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9em",
                marginBottom: "20px",
              }}
            >
              <i className="material-icons">person</i>
              {mobile}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
