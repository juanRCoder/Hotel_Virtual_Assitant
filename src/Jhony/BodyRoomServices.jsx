import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import RoomService from "../../databases/Schema/roomServiceSchema";

const BodyRoomServices = () => {
    const [formData, setFormData ] = useState({
        fecha: '',
        hora: '',
        bebidas: '',
        menu: '',
        cantidadBebidas: 0,
        cantidadMenu: 0,
        resumen: ''
    });

    const [bebidasOptions, setBebidasOptions] = useState([]);
    const [menuOptions, setMenuOptions] = useState([]);

    useEffect(() => {
        // Función para obtener informaicón de las bebidas y el menú
        const fetchData = async () => {
            try {
                const bebidasResponse = await fetch('./api/bebidas');
                const menuResponse = await fetch('./api/menu');
                
                const bebidasData = await bebidasResponse.json();
                const menuData = await menuResponse.json();

                setBebidasOptions(bebidasData);
                setMenuOptions(menuData);
            } catch (error) {
                console.error('Error al obtener opciones', error);
            };
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos envaidos', formData);
    };

    const handleClear = () => {
        setFormData({
            fecha: '',
            hora: '',
            bebidas: '',
            menu: '',
            cantidadBebidas: 0,
            cantidadMenu: 0,
            resumen: ''
        });
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Fecha</label>
                <input type="date" name="fecha" value={ formData.fecha } onChange={ handleChange } />

                <label>Hora</label>
                <input type="text" name="hora" value={ formData.hora } onChange={ handleChange } />

                <label >Bebidas</label>
                <select name="bebidas" value={ formData.bebidas } onChange={ handleChange }>
                    <option value=''>Seleccionar Bebida</option>
                    { bebidasOptions.map((bebida) => (
                        <option key={ bebida.id} value={ bebida.name } >
                            { bebida.name }
                        </option>
                    ))}
                </select>

                <label>Menu</label>
                <select name="menu" value={ formData.menu } onChange={ handleChange }>
                    <option value="">Selecionar menu</option>
                    { menuOptions.map((menu) => (
                        <option key={ menu.id } value={ menu.name } >
                            { menu.name }
                        </option>
                    ))}
                </select>
                
                <label >Cantidad de bebidas</label>
                <input type="number" name="cantidadBebidas" value={ formData.cantidadBebidas } onChange={ handleChange } />

                <label>Cantidad de menu</label>
                <input type="number" name="cantidadMenu" value={ formData.cantidadMenu } onChange={ handleChange } />

                <label>Resumen: </label>
                <textarea name="resumen" cols="30" rows="10" value={ formData.resumen } onChange={ handleChange }></textarea>

                <button type="submit">Enviar</button>

                <button type="button" onClick={ handleClear }>Borrar</button>
            </form>
            <Link to='/dashboard'>Volver</Link>
        </div>
    );
};

export default BodyRoomServices;