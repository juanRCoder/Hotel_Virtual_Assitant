import fetch from 'node-fetch';
import { enviarRegistro, enviarServicio} from '../../backend/controllers/dashboard.controller'
const API_URL = 'http://localhost:3004'

export const enviarRegistro = async (datos) => {
    try {
        const response = await fetch(`${API_URL}/dashboard/enviarRegistro`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if(!response.ok) {
            const errorData = await response.json();
            throw Error(errorData.message);
        }

        return await response.json()
    } catch(err) {
        console.error('Error al enviar datos al servidor', err)
        throw err;
    }
}

export const enviarServicio = async (datos) => {
    try {
        const response = await fetch(`${API_URL}/dashboard/servicios/enviarServicio`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw Error(errorData.message);
        }

        return await response.json();
    } catch(err) {
        console.error('Error al enviar datos al servidor', err);
        throw err;
    }
}