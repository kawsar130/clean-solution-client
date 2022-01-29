import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const useData = () => {
    const data = useContext(DataContext);
    return data;
};

export default useData;
