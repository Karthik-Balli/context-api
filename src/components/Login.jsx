import {useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div>
        <h3>Login Component</h3>
        
            <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            />
            {" "}
            <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />
            {" "}
            <button style={{backgroundColor: '#d5d5d5'}}>
                Submit
            </button>
    </div>
  )
}

export default Login