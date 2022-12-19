export const refresca = (nuevaMovie) => {
    return {
        type: "REFRESH",
        parametro: nuevaMovie
    }
}