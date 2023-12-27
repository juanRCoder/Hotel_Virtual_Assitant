import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import mongoose from 'mongoose';


const BodyReservaRestaurant = () => {
    const { id } = useParams();
    const [mesas, setMesas] = useState([]);
    const [reservaInfo, setReservaInfo] = useState({
        tipoMesa: '',
        cantidadPersonas: '',
        hora: '',
        minutes: '',
        fecha: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMesas = async () => {
            try {
                const response = await fetch(`http://localhost:3004/extraerMesas/${id}`);
                const data = await response.json();
                console.log('Mesas', data);
                setMesas(data);
            } catch (err) {
                console.error('Error al obtener las mesas:', err);
            }
        };

        fetchMesas();
    }, [id]);
    
    const handleChange = (e) => {
        setReservaInfo({
            ...reservaInfo,
            [e.target.name]: e.target.value
        });
    };

    const handleCrearReserva = async () => {
        try {
            const clienteId = new mongoose.Types.ObjectId();

            reservaInfo.tipoMesa = reservaInfo.tipoMesa || (mesas.length > 0 ? mesas[0].tipoMesa : '');
        
            const datosReserva = {
                reserva: reservaInfo.tipoMesa,
                cantidad: reservaInfo.cantidadPersonas || 1,
                fecha: reservaInfo.fecha || '15-01/2024',
                hora: reservaInfo.hora || '12',
                minutos: reservaInfo.minutes || '00'
            };
            
            const response = await fetch(`http://localhost:3004/enviarReserva/${clienteId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosReserva)
            });

            const data = await response.json();
            console.log('ID de la reserva:', data);

            navigate.goBack()
        } catch (error) {
            console.error('Error al crear la reserva:', error);
        }
    };

    const handleCancelarReserva = () => {
        navigate.goBack();
    }

    return (
        <div>
            <h2>Reserva Restaurant</h2>
            {/* Campos para ingresar la información de la reserva */}
            <div>
                    <label htmlFor="tipoMesa">Tipo de mesa</label>
                    <select 
                        name="tipoMesa" 
                        id="tipoMesa" 
                        value={ reservaInfo.tipoMesa}
                        onChange={ handleChange }
                        >
                        <option>
                            Selecciona el tipo de mesa
                        </option>
                        {Array.isArray(mesas) && mesas.length > 0 && mesas.map((mesa) => (
                            <option key={ mesa._id } value={ mesa.tipoMesa }>
                                { mesa.tipoMesa}
                            </option>
                        ))}    
                    </select>
            </div>
            <div>
                <label htmlFor="cantidadPersonas">Cantidad de Personas</label>
                <input 
                    type="number" 
                    id="cantidadPersonas"
                    name="cantidadPersonas"
                    value={ reservaInfo.cantidadPersonas }
                    onChange={ handleChange } 
                />
            </div>
            <div>
                <label htmlFor="hora">Hora</label>
                <select 
                    name="hora" 
                    id="hora"
                    value={ reservaInfo.hora }
                    onChange={ handleChange }
                >
                    {/* Opciones de hora */}
                    <option value="">...</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
            <div>
                <label htmlFor="minutes">Minutos</label>
                <select 
                    name="minutes" 
                    id="minutes"
                    value={ reservaInfo.minutes }
                    onChange={ handleChange }
                >
                    {/* Opciones para los minutos */}
                    <option value="">...</option>
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                </select>
            </div>
            <div>
                <label htmlFor="fecha">Fecha</label>
                <input 
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={ reservaInfo.fecha }
                    onChange={ handleChange }
                />
            </div>
            {/* Botones para enviar o cancelar la reserva */}
            <button onClick={ handleCrearReserva }>Enviar reserva</button>
            <button onClick={ handleCancelarReserva }>Cancelar Reserva</button>
        </div>
    )
}

export default BodyReservaRestaurant;
