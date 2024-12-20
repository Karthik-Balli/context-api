import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <h2>App Component</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App