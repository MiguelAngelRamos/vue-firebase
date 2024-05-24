import { defineStore } from "pinia";
import { ref, computed, onMounted } from 'vue';
import { useFirebaseAuth } from "vuefire"; //* getAuth()
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const useAuthStore = defineStore('auth', () => {

  const auth = useFirebaseAuth();
  const authUser = ref(null);
  const errorMsg = ref('');

  const login = ({ email, password }) => {
    //* vamos hacer el logeo en el servidor de firebase
    signInWithEmailAndPassword(auth, email, password)
      .then(userCrendetial => {
        console.log(userCrendetial);
      }).catch(error => console.error(error))
  }

  return {
    login,
  }
});