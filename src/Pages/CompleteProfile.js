import React, { useRef } from "react";
import BackButton from "../Components/Button/BackButton";
import Card from "../Components/Layout/Card";
import Logout from "../Components/Logout";
import "./CompleteProfile.css"

const CompleteProfile = () => {
  const nameInputRef = useRef();
  const imageInputRef = useRef();

  const updateHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const image = imageInputRef.current.value;

    const id = localStorage.getItem("token");

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCCXzhbX-HRm-ujGbrRU7-ynAlPT4t8HTY",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: id,
          displayname: name,
          photourl: image,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          console.log("resp", resp);
          return resp.json();
        } else {
          return resp.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        alert("update succesfully...");
        console.log("Last Then", data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCCXzhbX-HRm-ujGbrRU7-ynAlPT4t8HTY",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: id,
        }),
        headers: {
          "Content-Type": "application-json",
        },
      }
    )
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Card>
      <BackButton />
      <div>
        <Logout />
      </div>
      <form>
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="imm"
            />
           </div>
        </div>
        <div class="row mt-3">
        <div class="col-md-12">
          <label> Full Name</label>
          <input type="text" class="form-control" ref={nameInputRef} required />
        </div>
        <div class="col-md-12">
          <label>Upload Your image</label>
          <input class="form-control" type="file" accept="/image/*" ref={imageInputRef} />
        </div>
        </div>
        <div class="mt-5 text-center">
        <button class="btn btn-primary profile-button" onClick={updateHandler}>Update</button>
        </div>
      </form>
    </Card>
  );
};

export default CompleteProfile;
