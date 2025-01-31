import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/userForm.css'

const UserForm = ({handleSubmit, register, reset, createUser, update, setUpdate, updateUser, isShow, setIsShow}) => {

    useEffect(() => {
        reset(update)
    }, [update])
    

    const submit = (data) => {
        if (update) {
            updateUser('/users', update.id, data)
            setUpdate()
        } else {
            createUser('/users', data)
        }
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        })
        handleClose()
    }
    
    const handleClose = () => {
        setIsShow(false)
    }

    return (
        <div className={`userform ${isShow && 'active'}`}>
            <form className='userform__form' onSubmit={handleSubmit(submit)} >
                <div className='userform__header'>
                    <h2>{update ? 'Edit User' : 'New User'}</h2> 
                    <button onClick={handleClose} className='userform__close' type='button'><box-icon name='x'></box-icon></button>
                </div>
                <div className='userform__item'>
                    <label htmlFor="first_name">First Name</label>
                    <input {...register('first_name')} id='first_name' type="text" />
                </div>
                <div className='userform__item'>
                    <label htmlFor="last_name">Last Name</label>
                    <input {...register('last_name')} id='last_name' type="text" />
                </div>
                <div className='userform__item'>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} id='email' type="email" />
                </div>
                <div className='userform__item'>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} id='password' type="password" />
                </div>
                <div className='userform__item'>
                    <label htmlFor="birthday">Birthday</label>
                    <input {...register('birthday')} id='birthday' type="date" />
                </div>
                <button className='userform__btn'>{update ? 'Save changes' : 'Add new user'}</button>
            </form>
        </div>
    )
}

export default UserForm