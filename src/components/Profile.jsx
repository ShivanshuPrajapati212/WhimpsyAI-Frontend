import React, { useContext } from 'react'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
      const { user } = useAuth();
    
      console.log(user)
  return (
    <div className='text-xl flex flex-col'>
      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      <p>ID: {user?._id}</p>
    </div>
  )
}

export default Profile
