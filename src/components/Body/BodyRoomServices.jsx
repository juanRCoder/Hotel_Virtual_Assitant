import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const BodyRoomServices = () => {
    const [formData, setFormData ] = useState({
        fecha: '',
        hora: 0,
        minutes: 0,
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
                const bebidasResponse = await fetch(`http://localhost:3004/extraerBebidas`);
                const menuResponse = await fetch('http://localhost:3004/extraerMenu');
                
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
            hora: 0,
            minutes: 0,
            bebidas: '',
            menu: '',
            cantidadBebidas: 0,
            cantidadMenu: 0,
            resumen: ''
        });
    };

    const generateHoursOption = () => {
        const hoursOption = [];
        for(let i = 6; i < 24; i++){
            hoursOption.push(
                <option key={ i } value={ i }>
                    { i < 10 ? `0${i}` : i}
                </option>
            );
        }
        return hoursOption;
    };

    const generateMinutesOption = () => {
        const minutesOption = [];
        for(let i = 0; i <= 45; i += 15) {
            minutesOption.push(
                <option key={ i } value={ i }>
                    { i < 10 ? `0${i}` : i }
                </option>
            );
        }
        return minutesOption;
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Fecha</label>
                <input type="date" name="fecha" value={ formData.fecha } onChange={ handleChange } />

                <label>Hora</label>
                <select name="hora" value={ formData.hora } onChange={ handleChange } >
                    { generateHoursOption() }
                </select>

                <label>Minutos</label>
                <select name="minutes" value={ formData.minutes } onChange={ handleChange }>
                    { generateMinutesOption() }
                </select>

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