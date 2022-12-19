export const addMyMovie = (nuevaMovie) => {
    return {
        type: "ADD",
        parametro: nuevaMovie
    }
}
export const deleteMyMovie = (idMovie) => {
    return {
        type: "REMOVE",
        parametro: idMovie
    }
}