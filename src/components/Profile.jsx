import React, { useContext } from 'react'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
      const { user } = useAuth();
    
      console.log(user)
  return (
    <div>
      Hi there
    </div>
  )
}

export default Profile
