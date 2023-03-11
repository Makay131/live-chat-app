import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collection)=> {
    //for each collection i need to reset the error since there migth be more than 1000 collection
    const error = ref(null);

    const addDoc = async (doc) => {
        error.value = null;

        try {
            await projectFirestore.collection(collection).add(doc);
        } catch(err) {
            console.log(err.message)
            error.value= 'Could not send the message'
        }
    }

    return { error, addDoc }

}

export default useCollection;