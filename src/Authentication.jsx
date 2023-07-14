import { useState } from "react";
import Login from "./Login";
import axios from "axios";

import React from "react";

const Authentication = async () => {
  // axios
  //   .post("https://be-infollion.vercel.app/api/v1/users/login", {
  //     username: "roope.sh@simplifii.com",
  //     password: "12341a7899A@",
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   });

      try{
     const response = await axios.post("https://be-infollion.vercel.app/api/v1/users/login",{
      
        "username":"roopesh@simplifii.com",
          "password":"12341a7899A@"
      });
      console.log(response.data.message);
      console.log(response.data.token)
      
    } catch(err){
      console.log(err)
    }

     
     

  return <></>;
};

export default Authentication;

