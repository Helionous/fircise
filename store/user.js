import { create } from "zustand"
import { auth, database } from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection, doc, getDocs, limit, query, updateDoc, where } from "firebase/firestore"

export const useUserStore = create((set) => ({
    users: [],
    userAuth: {
        userId: '-',
        nombre: 'invitado',
        email: '-',
        rol: 'guest',
    },
    selectedUser: {
        userId: '-',
        nombre: 'invitado',
        email: '-',
        rol: 'guest',
    },
    setUserAuth: (user) => set({ userAuth: user }),
    setDefaultUserAuth: () => set({
        userId: '-',
        nombre: 'invitado',
        email: '-',
        rol: 'guest',
    }),
    setSelectedUser: (user) => set({ selectedUser: user }),
    getUserById: async (userId) => {
        const q = query(collection(database, 'users'), where('userId', '==', userId), limit(1))
        const querySnapshot = await getDocs(q)
        let user = null
        querySnapshot.forEach((doc) => {
            user = doc.data()
        })
        return user
    },
    getUsers: async () => {
        try {
            const q = query(collection(database, 'users'))
            const querySnapshot = await getDocs(q)
            const users = []
            querySnapshot.forEach((doc) => {
                users.push({ id: doc.id, ...doc.data() })
            })
            set({ users })
        } catch (error) {
            console.error('Error al obtener las alertas:', error)
        }
    },
    registerUser: async (email, password, nombre) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            const userData = {
                userId: user.uid,
                nombre: nombre || '',
                rol: 'user',
            }
            await addDoc(collection(database, 'users'), userData)
            return userData
        } catch (error) {
            throw new Error("Failed to register user: " + error.message)
        }
    },
    changeUserRole: async (userId, rol) => {
        try {
            const userRef = doc(database, 'users', userId)
            await updateDoc(userRef, { rol })
            return { status: 'success', message: 'User role updated successfully.' }
        } catch (error) {
            console.error('Error updating user role:', error)
            return { status: 'error', message: 'Error updating user role.' }
        }
    }
}))