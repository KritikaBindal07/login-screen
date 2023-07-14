import React from 'react'
import axios from "axios"

const Otp = async() => {

    try{
        const response = await axios.post("https://be-infollion.vercel.app/api/v1/users/generate-otp",{
            "username":"roopesh@simplifii.com"
        
             
         });
         const otp = response.data.otp 
         console.log(response);
         console.log(otp)

         const verify= await axios.post("https://be-infollion.vercel.app/api/v1/users/verify-otp",{
         "username":"roopesh@simplifii.com", "otp":`${otp}`
         
      })
      console.log(verify)
      console.log(verify.data.message)
      console.log(verify.data.token)
     
     
       } catch(err){
         console.log(err)
       }

  return (
    <div>Otp</div>
  )
}

export default Otp