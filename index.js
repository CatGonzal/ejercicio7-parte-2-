# ejercicio7-parte-2-
bootcamp (trabajando con sets y objetos)

const datos = {
    nombre: "Cata",
    apellido: "Gonzal",
    edad: 22,
    altura: 168,
    eresDesarrollador: true
}

const edad = datos.edad
const lista = [
    {
        ...datos
    },{
        nombre: "Maria",
        apellido: "Emeth",
        edad: 25,
        altura: 170,
        eresDesarrollador: true
    },{
        nombre: "Candela",
        apellido: "Aromass",
        edad: 28,
        altura: 168,
        eresDesarrollador: true
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)
