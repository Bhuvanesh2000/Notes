import { useContext } from "react";
import GetListContext from "../contexts/GetListContext";

export default function useGetListContext() {
    return useContext(GetListContext);
}