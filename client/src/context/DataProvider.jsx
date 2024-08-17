//this file is created when the user successfully sign up, the name should print instead of login button.

import { createContext, useState } from 'react';

//in video, DataContext = LoginContext
export const LoginContext = createContext(null);

//in video, DataProvider = ContextProvider
const ContextProvider = ({children}) => {

    const [ account, setAccount ] = useState('');
    
    return (
        <LoginContext.Provider value={{ account, setAccount }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;