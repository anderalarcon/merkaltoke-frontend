'use client'
import React, { useState } from 'react'
import axios from "axios"
import Navbar from '../../components/Navbar/Navbar'
import style from './Login.module.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const handleChange = (e: any) => {
        const { name, value } = e.target

        switch (name) {
            case 'Email':
                setEmail(value)
                break
            case 'Contrasena':
                setContrasena(value)
                break
            default:
                break
        }
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const data = {
            email,
            contrasena
        }
        
        try {
            const response = await axios.post('http://localhost:3000/user   ', data)
            console.log('response', response);
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <div className={style.login}>
            <Navbar />
            <form className={style.login_form} onSubmit={handleSubmit}>
                <div className={style.login_form_item}>
                    <label htmlFor="Email">Email</label>
                    <input type="text" id="Email" name='Email' onChange={handleChange} />
                </div>
                <div className={style.login_form_item}>
                    <label htmlFor="Contrasena">Contrasena</label>
                    <input type="text" id="Contrasena" name='Contrasena' onChange={handleChange} />
                </div>
                <button type='submit'>Registrarme</button>
            </form>
        </div>
    )
}

export default Login
