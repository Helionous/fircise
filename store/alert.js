import { create } from 'zustand'
import { database } from '../config/firebase'
import { addDoc, collection, getDocs, query, where, doc, updateDoc } from '@firebase/firestore'

// Crea el store de Zustand
export const useAlertStore = create((set) => ({
    alerts: [],
    userAlerts: [],
    selectedAlert: {},
    alertForm: {},
    setAlertForm: (alertForm) => {
        console.log(alertForm)
        set({ alertForm })
    },
    setSelectedAlert: (alert) => {
        set({ selectedAlert: alert })
    },
    fetchAlerts: async (published = true) => {
        try {
            const q = query(collection(database, 'alerts'), where('published', '==', published))
            const querySnapshot = await getDocs(q)
            const alerts = []
            querySnapshot.forEach((doc) => {
                alerts.push({ id: doc.id, ...doc.data() })
            })
            set({ alerts })
        } catch (error) {
            console.error('Error al obtener las alertas:', error)
        }
    },
    getUserAlerts: async (userId) => {
        try {
            const q = query(collection(database, 'alerts'), where('userId', '==', userId))
            const querySnapshot = await getDocs(q)
            const alerts = []
            querySnapshot.forEach((doc) => {
                alerts.push({ id: doc.id, ...doc.data() })
            })
            set({ userAlerts: alerts })
        } catch (error) {
            console.error('Error al obtener las alertas:', error)
        }
    },
    createAlert: async (alertData) => {
        try {
            const docRef = await addDoc(collection(database, 'alerts'), alertData)
            set((state) => ({
                alerts: [...state.alerts, { id: docRef.id, ...alertData }],
            }))
        } catch (error) {
            console.error('Error al crear el alerta:', error)
        }
    },
    validateAlert: async (alertId) => {
        try {
            const alertRef = doc(database, 'alerts', alertId)
            await updateDoc(alertRef, { published: true })
            return { status: 'success', message: 'Alert validated successfully.' }
        } catch (error) {
            console.error('Error validating alert:', error);
            return { status: 'error', message: 'Error validating alert.' };
        }
    }
}))
