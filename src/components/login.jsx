import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaUnlock } from "react-icons/fa";
import { MyInput, Submit, Checkbox, InputNoLabel } from "./formComp";
import { useProductContext } from "../state/context/AppContext";



const LogRegComp = () => {


// INPUT PASSWORD HIDE SHOW JS

  const HideShowPass = () => {
    
   let passInput = document.querySelectorAll(".passInput");

    passInput.forEach((elem) => {

      if (elem.type === "password") {
        elem.type = "text";
      } 
      
      else {
        elem.type = "password";
      }

    })

};



// LOGIN FORM INNER ITEM COMPONENT

const LoginComp = () => {

  return (
    <>
      <MyInput
        type="email"
        id="userEmail"
        lableName="Email ID"
        labelClass="loginLabel"
        placeholder="Enter Your Email ID"
        attReq="required"
      />

      <MyInput
        type="Password"
        id="LogInputPassword"
        inputClass="passInput"
        lableName="Password"
        labelClass="loginLabel"
        placeholder="Enter Your Password"
        attReq="required"
      />

      <div className="loginCheck flex-space">
        <div className="wrap pointer">
          <Checkbox
            id="passCheckBox"
            labelValue="Show Password"
            InputClickFunc={HideShowPass}
            CheckboxClass="pointer"
            labelClass="pointer"
          />
        </div>
        <span>
          <Link to="#" onClick={setForgotTag}>Forgot Password?</Link>
        </span>
      </div>
      <Submit class="myBtn" value="Login" />
      <div className="bottom-text">
        <span>
          New To Website? <Link to="#" onClick={setRegTag}>Sign Up Now</Link>
        </span>
      </div>
    </>
  );
}



// FORGOT PASSWORD

const ForgotPassword = () => {

  return (

      <>

          <div className="inputForgNote">
              <p><strong>Note:</strong> Password Reset link will be send to your registered email address.</p>
          </div>

          <InputNoLabel
             type="email"
             id="userEmail"
             placeholder="Enter Your Email ID"
             attReq="required"
          />

          <Submit class="myBtn" value="Send Reset Link" />

          <div class="bottom-text">
              <span>Back To <Link to="#" onClick={setLogTag}>Login</Link></span>
          </div>

      </>

  )

}



// SIGN UP FORM INNER ITEM COMPONENT

const RegComp = () => {

  return (
    <>
      <MyInput
        type="text"
        id="userName"
        lableName="Name"
        labelClass="loginLabel"
        placeholder="Enter Your Full Name"
        attReq="required"
      />

      <MyInput
        type="email"
        id="userEmail"
        lableName="Email ID"
        labelClass="loginLabel"
        placeholder="Enter Your Email ID"
        attReq="required"
      />

      <MyInput
        type="Password"
        id="inputPassword"
        inputClass="passInput"
        lableName="Password"
        labelClass="loginLabel"
        placeholder="Enter Your Password"
        attReq="required"
      />

      <MyInput
        type="Password"
        id="confInputPassword"
        inputClass="passInput"
        lableName="Confirm Password"
        labelClass="loginLabel"
        placeholder="Enter Your Password"
        attReq="required"
      />

      <div className="loginCheck flex-space">
        <div className="wrap pointer">
          <Checkbox
            id="passCheckBox"
            labelValue="Show Password"
            InputClickFunc={HideShowPass}
            CheckboxClass="pointer"
            labelClass="pointer"
          />
        </div>
      </div>
      <Submit class="myBtn" value="Login" />
      <div className="bottom-text">
        <span>
          Already Registered? <Link to="#" onClick={setLogTag}>Sign In</Link>
        </span>
      </div>
    </>
  );
}






  const [tag, setTag] = useState(<LoginComp />);
  const [headVal, setheadVal] = useState("Login or Register");
  // const [myClass, setMyClass] = useState("logregPanel InputComp");

  const setLogTag = () => {
    const newVal = <LoginComp />;
    setTag(newVal);
    const newHeadVal = "Login or Register"
    setheadVal(newHeadVal)
  }

  const setForgotTag = () => {
    const newVal = <ForgotPassword />;
    setTag(newVal);
    const newHeadVal = "Forgot Password"
    setheadVal(newHeadVal)
  }

  const setRegTag = () => {
    const newVal = <RegComp />;
    setTag(newVal);
    const newHeadVal = "Login or Register"
    setheadVal(newHeadVal)
  }


  return (
    <>
      <div className="myPanelCont">
        <form method="post" action="#" className="myForm">
          <div className="loginPanel">
            <h1>{headVal}</h1>
            {tag}
          </div>
        </form>
      </div>
    </>
  );
}

export default LogRegComp;
