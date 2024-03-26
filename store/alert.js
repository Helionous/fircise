import { create } from 'zustand'
import { database } from '../config/firebase'

// Crea el store de Zustand
export const useAlertStore = create((set) => ({
    alerts: [],
    createAlert: async (alertData) => {
        try {
            const docRef = await database.collection('alerts').add(alertData)
            set((state) => ({
                alerts: [...state.alerts, { id: docRef.id, ...alertData }],
            }));
        } catch (error) {
            console.error('Error al crear el alerta:', error)
        }
    },
    updateAlert: async (alertId, alertData) => {
        try {
            // Actualiza el documento correspondiente al alerta en la colección "alerts" de Firebase
            await database.collection('alerts').doc(alertId).update(alertData)
            // Actualiza el estado del store con los datos actualizados del alerta
            set((state) => ({
                alerts: state.alerts.map((alert) => (alert.id === alertId ? { ...alert, ...alertData } : alert)),
            }));
        } catch (error) {
            console.error('Error al actualizar el alerta:', error)
        }
    },
}))
