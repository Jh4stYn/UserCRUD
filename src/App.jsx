import { useEffect, useState } from 'react';
import './App.css'
import useCRUD from "./hooks/useCRUD";
import UserCard from './components/UserCard';
import UserForm from './components/UserForm';
import { useForm } from 'react-hook-form';
//first_name, last_name, email, password, birthday 

function App() {
  const {handleSubmit, register, reset} = useForm()
  const [update, setUpdate] = useState()
  const [isShow, setIsShow] = useState(false)
  const [users, createUser, getUser, updateUser, deleteUser] =  useCRUD()

  useEffect(() => {
    getUser('/users')
  }, [])

  console.log(users)

  const handleForm = () => {
    setIsShow(true)
    setUpdate()
    reset({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: '',
    })
  }
  
  return (
    <div className='app'>
      <div className='app__header'>
        <h1 className='app__title'>Users</h1>
        <button className='app__btn' onClick={handleForm}><box-icon name='plus' color='#ffffff' ></box-icon>Create New User</button>
      </div>
      <UserForm
        handleSubmit={handleSubmit}
        register={register}
        reset={reset}
        createUser={createUser}
        update={update}
        setUpdate={setUpdate}
        updateUser={updateUser}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      <div className='app__container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUpdate={setUpdate}
              setIsShow={setIsShow}
            />
          ))
        }
      </div>
      
    </div>
  )
}

export default App
