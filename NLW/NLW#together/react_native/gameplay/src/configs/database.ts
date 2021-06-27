import { TextInputProps } from "react-native";
import { AuthProvider } from "../hooks/auth";

const DATABASE_NAME = '@gameplay';

//@app:collection
const COLLECTION_USER = `${DATABASE_NAME}:user`
const COLLECTION_APPOINTMENTs = `${DATABASE_NAME}:appointments`


export { 
    COLLECTION_USER,
    COLLECTION_APPOINTMENTs
}