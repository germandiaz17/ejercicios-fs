//Imports de los módulos
//fs y path
const fs = require('fs').promises
const path = require('path')
const rute = path.resolve("./users.json")


const getUsers = async() => {
    //Leer el archivo
    try{
        const response = await fs.readFile(rute, {encoding: "utf-8"})
    //Regresar el arreglo de usuarios como objeto literal Javascript (sin notación JSON)
        return JSON.parse(response)
    }catch(err){
        console.log(err)
    }
};

const addUser = async (userObj) => {
        try{
        //leer el archivo 
            const response = await getUsers()
        //convertir el contenido en formato JSON en un objeto JS

        //agregar el usuario en el arreglo
            response.push(userObj)
        //sobreescribir el arreglo en el archivo
            fs.writeFile(rute, JSON.stringify(response))
        //si el proceso se realizó correctamente tendrás que regresar el objeto de usuario
        //que acabas de agregar en el arreglo
            return userObj
        }catch(err) {
            console.log(err)
        }
};

const clearUsers = async () => {
    try{
        //Vaciar el arreglo y sobreescribir el archivo
        await fs.writeFile(rute, JSON.stringify([]))
        //Si el proceso se realizó correctamente tendrás que regresar true
        return true
    }catch(err) {   
        console.log(err)
    }
}

addUser({"firstname":"German","lastname":"Diaz","email":"GermanDiaz@gmail.com","password":"GerDiz1234"})
clearUsers()

module.exports = {
    getUsers,
    addUser,
    clearUsers,
};
