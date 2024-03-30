import { create } from "zustand"
import { auth, database } from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection, getDocs, limit, query, where } from "firebase/firestore"

export const useUserStore = create((set) => ({
    userAuth: {
        userId: '-',
        nombre: 'invitado',
        email: '-',
        rol: 'guest',
    },
    setUserAuth: (user) => set({ userAuth: user }),
    getUserById: async (userId) => {
        const q = query(collection(database, 'users'), where('userId', '==', userId), limit(1))
        const querySnapshot = await getDocs(q)
        let user = null
        querySnapshot.forEach((doc) => {
            user = doc.data()
        })
        return user
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
    }
}))