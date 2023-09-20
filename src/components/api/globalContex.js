import React,{ useContext,useReducer,useEffect } from "react";
import reducer from "./reducer";
let API = "https://anuvutibackend.onrender.com/api";
const initialState ={
    isLoading : true,
    books :[],
}



const AppContext = React.createContext()


const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    

    const fetchApiData = async(url) =>{
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            dispatch({
                type : "GET_BOOKS",
                payload : {
                    books : data.data    ,
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchApiData(API);
      }, []);

    return (
        <>
        <AppContext.Provider value={{...state}} >
            {children}
        </AppContext.Provider>
        
        </>
    )
} 


//custom hook


const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext , AppProvider , useGlobalContext} ;
