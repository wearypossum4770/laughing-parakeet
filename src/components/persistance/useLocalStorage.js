import localforage from 'localforage'

export default function useLocalStorage(key,value){
    try {
        const storageItem= await localforage.getItem(key);
        // This code runs once the value has been loaded
        // from the offline store.
        console.log(storageItem);
    } catch (err) {
        // This code runs if there were any errors.
        console.log(err);
    }
}