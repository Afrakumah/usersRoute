import React from "react";
import Style from './Register.module.css'
import {Form, redirect} from 'react-router-dom'



export default function Register() {

  // const [firstname, setFirstname] = useState('')
  // const [lastname, setLastname] = useState('')
  // const [email, setEmail] = useState('')

  return (
    <>

<div className={Style.form}>
        <h2>Sign up here!</h2>
        <Form action="/register " method='POST'>
            <label htmlFor="firstname">First Name</label><br />
            <input type="text" name='firstname' id='firstname' placeholder='Enter your first name' />
            <br /> <br />
            <label htmlFor="lastname">Last Name</label><br />
            <input type="text" name='lastname' id='lastname' placeholder='Enter your last name' 
            // value={lastname}
            // onChange={(e) => setLastname(e.target.value)}
            />
            <br /> <br />
            <label htmlFor="email">Email</label><br />
            <input type="email" name='email' id='email' placeholder='Enter your email' />
            <br /> <br />
            <div className={Style.submit}>
                <button type='submit'>Submit</button>
            </div>
        </Form>
    </div>



      {/* <h2 style={{marginBottom: '1rem' }} >Register</h2>
      <form action="" method="post" >
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name=""
          placeholder="enter first name"
        />{" "}
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="fname"
          name=""
          placeholder="enter last name"
        />{" "}
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="" placeholder="enter email" />{" "}
        <br />
      </form> */}
    </>
  );
}


export const registerAction = async({ request }) => {
  const formData = await request.formData()

  const user = {
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    email: formData.get('email')

  }
  console.log('user----', user);
  
  return redirect('/')
}

