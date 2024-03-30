import { create } from "zustand"
import { auth, database } from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore"

export const useUserStore = create((set) => ({
    userAuth: {
        userId: '',
        nombre: '',
        email: '',
        rol: 'guest',
    },
    setUserAuth: (user) => set({ userAuth: user }),
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