// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializeAuthentication = () => {
    // Initialize Firebase
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* 
steps for authentication
------------------------

==> Step-1: Initial Set-up

1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. enable auth methods
------------------------

==> Step-2: Set-up Component

1.Create Login Component
2.Create Register Component
3. Create Route for Login & Register
------------------------

==> Step-3: auth System

1. Set-up log-in & Log-out methods
2. set userState
3. user observer
4. return methods &states
------------------------

==> Step-4: Create Auth Context Hook (useAuth)
1. Create an auth context
2. Create Context/Auth Provider
3. Set context value of context provider
4. useAuth provider
5. Create useAuth Hooks
------------------------

==> Step-5: Private Route
1. Create Private Route
2. Set Private Route
3.
4.
*/