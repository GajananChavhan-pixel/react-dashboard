
import React from 'react';
import { Link } from 'react-router-dom';

function SideNav() 
{
  const userJson= localStorage.getItem("user");
  const {usertype} = JSON.parse(userJson);

    const options={
        ADMIN:[
            {label:"Add Employee",to:'/dashboard/addemployee'},
            {label:"View Employee",to:'/dashboard/viewemployee'}
        ],
        CRM:[
            {label:"Add Enquiry",to:'/dashboard/addenquiry'},
            {label:"View Enquiry",to:'/dashboard/viewenquiry'}
        ]
    }

  return (
    <div>
      <h1>SideNav</h1>

      {
        options[usertype].map((btn, index)=> <Link key={index} to={btn.to}>{btn.label}</Link>)
      }
    </div>
  )
}

export default SideNav
