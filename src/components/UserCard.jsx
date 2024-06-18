import React from 'react'
import './styles/userCard.css'

const UserCard = ({user, deleteUser, setUpdate, setIsShow}) => {
    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setUpdate(user)
        setIsShow(true)
    }

    return (
        <article className='usercard'>
            <h2 className='usercard__name'>{user.first_name} {user.last_name} # {user.id}</h2>
            <hr />
            <ul className='usercard__list'>
                <li className='usercard__item'><span>Email: </span><span>{user.email}</span></li>
                <li className='usercard__item'><span>Birthday: </span><span>{user.birthday}</span></li>
            </ul>
            <hr />
            <div className='usercard__btns'>
                <button onClick={handleDelete}><box-icon name='trash' color='#ffffff' ></box-icon></button>
                <button onClick={handleEdit}><box-icon name='pencil'></box-icon></button>
            </div>
        </article>
    )
}

export default UserCard