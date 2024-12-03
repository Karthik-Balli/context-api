import {useContext } from 'react'
import UserContext from '../context/UserContext'
const Profile = () => {
    const {user} = useContext(UserContext);
    if(!user) return <h3>User not Logged in!</h3>
  return (
    <div>
        <h3>Profile Component</h3>
        <h4>Username: {user.username}</h4>
    </div>
  )
}

export default Profile