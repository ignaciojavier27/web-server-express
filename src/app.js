const { envs } = require('./config/env');
const { startServer } = require('./server/server');

const main = () => {
    startServer({
        PORT: envs.PORT,
        PUBLIC_PATH: envs.PUBLIC_PATH
    })
}




// Función agnóstica autoconvocada
( async () => {
    main()
})()