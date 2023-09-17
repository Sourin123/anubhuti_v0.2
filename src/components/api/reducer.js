const reducer = (state,action) =>{

    switch (action.type) {
        case "SET_LOADING":

            return {
            ...state ,
            isLoading : true,
            }
            

        case "GET_BOOKS":
            return {
                ...state,
                isLoading: false,
                books: action.payload.books,
            }
    
        
    }

    return state;
}
export default reducer;