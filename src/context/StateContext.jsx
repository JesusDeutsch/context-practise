import React, { createContext, useState } from "react";

export const NumberContext = createContext(null);

export const NumberContextProvider = ({children}) => {

	const [number, setNumber] = useState(0);

	return(
		<NumberContext.Provider value={{number, setNumber}}>
			{children}
		</NumberContext.Provider>
	)
	}




