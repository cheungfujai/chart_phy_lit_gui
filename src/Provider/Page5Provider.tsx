import React from 'react';

const P5Context = React.createContext([] as any);
    

export const P5Provider = ({children}) => {
    const [value, setValue] = React.useState<any []>([null,null,null,null,null,null,null,null,null,null,null,null,] as any);

    return (
        <P5Context.Provider value={{value,setValue}}> {children} </P5Context.Provider>
    )
}