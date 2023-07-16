import React from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";

const OtpLogin = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    otp1: "",
  });

  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserInput({ ...userInput, [name]: value });
    console.log(userInput);
  };

  const HandleOtp = async (e) => {
    e.preventDefault();

    try {
      const response1 = await axios.post(
        "https://be-infollion.vercel.app/api/v1/users/generate-otp",
        {
          username: `${userInput.username}`,
        }
      );
      const otp = response1.data.otp;
      const message = response1.data.message
      alert(message)
      alert(`OTP IS ${otp}`)
      console.log(response1);
      console.log(otp);
    } catch (err) {
      console.log(err);
      alert("some error occured")
    }
  };

  //   const verify = await axios.post(
  //     "https://be-infollion.vercel.app/api/v1/users/verify-otp",
  //     {
  //       username: "roopesh@simplifii.com",
  //       otp: `${otp}`,
  //     }
  //   );

  //   const otp_token = verify.data.token;
  //   localStorage.setItem("Otp_token", otp_token);
  //   console.log(verify);
  //   console.log(verify.data.message);
  //   console.log(otp_token);
  // } catch (err) {
  //   console.log(err);
  // }

  const Verify = async (e) => {
    e.preventDefault();

    try {
      const verify = await axios.post(
        "https://be-infollion.vercel.app/api/v1/users/verify-otp",
        {
          username:`${userInput.username}`,
          otp: userInput.otp1
        }
      );

      const otp_token = verify.data.token;
      const message1 = verify.data.message
      localStorage.setItem("Otp_token", otp_token);
      console.log(verify);
      console.log(verify.data.message);
      console.log(otp_token);
      alert(message1)
    } catch (err) {
      console.log(err);
      alert("some error occured")
    }

    setUserInput({
      username: "",
      otp1: "",
    })


  };

  return (
    <div className="container">
      <div className="container1">
        <div className="back">
          <i className="color fa fa-arrow-left" style={{ color: "#f0f2f5" }}>
            &nbsp;<span className="font">Back to Website</span>
          </i>
        </div>
      </div>
      <div className="container2">
        <div className="img">
          <img src="https://infollion.com/img/logo.png" alt="logo" />
        </div>

        <div className="text">Login to Dashboard</div>

        <form>
          <div className="input">
            <i className="fa fa-envelope align1" aria-hidden="true"></i>

            <input
              onChange={HandleInput}
              className="input-bpx"
              name="username"
              type="email"
              placeholder="Email/ Username"
              value={userInput.username}
              required
            ></input>
          </div>

          

          <div className="btn-div">
            <button
              onClick={(e) => HandleOtp(e)}
              type="button"
              className="btn"
            >
              Get OTP
            </button>
          </div> <br/>

          
          <br/>

          <div className="input1">
            <i className="fa fa-lock align"></i>

            <input
              onChange={HandleInput}
              className="input-box"
              type="text"
              name="otp1"
              placeholder="Enter OTP"
              value={userInput.otp1}
              
            ></input>

            <span className="forgot">Forgot?</span>
          </div>

          <div className="btn-div">
            <button onClick={(e) => Verify(e)} className="btn1 btn-color">
                OTP Verification
            </button>
          </div>

          <div className="or">Or Log in with</div>

          <div className="mediaContainer">
            <div className="google">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                fill="currentColor"
                className="bi bi-google "
                viewBox="0 -7 18 23"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
              <button className="button-google">Sign in with Google</button>
            </div>
            <div className="linkedin">
              <button className="linkedin-button">
                {" "}
                <i class="fa fa-linkedin-square align-icon"></i> Sign in with
                Linkedin
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpLogin;
