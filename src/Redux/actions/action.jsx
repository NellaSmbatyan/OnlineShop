export const ADD = (item) =>{
    return {
        type:'ADD_CART',
        payload:item
    }
}
export const Delete = (id) =>{
    return {
        type:'REMOVE_CART',
        payload:id
    }
}
export const Remove = (ind) =>{
    return {
        type:'REMOVE_ONE',
        payload:ind
    }
}

