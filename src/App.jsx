import "./App.css"
import { useState } from 'react'


import NewUserForm from "./components/newuser/NewUserFrom"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from "./components/userlist/UserList"



function App() {
  const [showModal, setshowModal] = useState(false)
  const [users, setUsers] = useState([{}])

  const handleDelete = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
    setUsers(fitlterUser)
  }

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setshowModal(false)
  }

  const closeModal = (e) => {
    if (e.target.classList.value === 'overlay') setshowModal(false)
    if (e.key === "Escape") setshowModal(false)
  }


  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 &&
            <h2>No Users</h2>}
        </div>
        <UserList users={users} handleDelete={handleDelete} />
      </main>
       {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={() => setshowModal(true)} className="create-user">Create User</button>
      <Footer />
    </div>
  )
}

export default App