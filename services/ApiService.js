import builder from '../util/https-base'

    // SOLO DE DEMOSTRACION
    // Cambiar la URL a la de python flask
const { https } = builder("/","https://lilab-backend-python.herokuapp.com/api")

const getSentinel = (dni) => {
    return https.get("/sentinel/"+dni)
}

const getSbs = (dni) => {
    return https.get("/sbs/"+dni)
}

export default {
    getSentinel,
    getSbs
}