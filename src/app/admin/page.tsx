'use client'
import React, { useState } from 'react'
import axios from "axios";
import Navbar from '../../components/Navbar/Navbar';
import { Product } from '../../interfaces/Product';

const Admin = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [imageurl, setImageurl] = useState('')

    const createProduct = async (data:Product) => {
        const response = await axios.post('http://localhost:3000/products', data)
        console.log('response', response);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const data = {
            nombre,
            descripcion,
            precio,
            imageurl
        }
        
        try {
            createProduct(data)
        } catch (error) {
            console.log('error', error);
        }
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target

        switch (name) {
            case 'Nombre':
                setNombre(value)
                break
            case 'Descripcion':
                setDescripcion(value)
                break
            case 'Precio':
                setPrecio(value)
                break
            case 'Url':
                setImageurl(value)
                break
            default:
                break
        }
    }

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Nombre">Nombre</label>
                    <input type="text" id="Nombre" name='Nombre' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Descripcion">Descripcion</label>
                    <input type="text" id="Descripcion" name='Descripcion' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Precio">Precio</label>
                    <input type="text" id="Precio" name='Precio' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Url">Url</label>
                    <input type="text" id="Url" name='Url' onChange={handleChange} />
                </div>
                <button type='submit'>Crear</button>

            </form>
        </div>
    )
}

export default Admin