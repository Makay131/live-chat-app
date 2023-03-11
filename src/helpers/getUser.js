import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const user = ref(projectAuth.currentUser);

//if a user logs in or out the func parameter below will run each time.
projectAuth.onAuthStateChanged(_user => {
    user.value = _user; //either null or a user(logout/login)
    //console.log(_user)
})

const getUser = ()=> {
    return { user }
}

export default getUser;