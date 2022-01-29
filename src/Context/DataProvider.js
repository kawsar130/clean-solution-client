import { createContext } from "react";
import useDataStates from "../hooks/useDataStates";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const allContexts = useDataStates();
    return (
        <DataContext.Provider value={allContexts}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
