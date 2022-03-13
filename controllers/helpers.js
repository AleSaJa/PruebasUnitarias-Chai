const getYear = () => {
    return new Date().getFullYear();
}

const getHola = () => {
    return "Hola Mundo";
}

module.exports = {
    getYear: getYear,
    getHola: getHola,
}