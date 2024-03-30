import { create } from 'zustand'
import { database } from '../config/firebase'
import { addDoc, collection, getDocs, query, where } from '@firebase/firestore'

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
    fetchAlerts: async () => {
        try {
            const querySnapshot = await getDocs(collection(database, 'alerts'))
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
}))
