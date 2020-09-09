export const addFeature = (obj) => {
    return {
        type : 'ADD_FEATURE',
        payload : obj
    }
}

export const removeFeature = (obj) => {
    return {
        type : 'REMOVE_FEATURE',
        payload : obj
    }
}