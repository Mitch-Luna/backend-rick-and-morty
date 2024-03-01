//Este archivo se encargara de definir el modelo de datos
import fs from "fs";

export const readData = () => {
    try{
        const data = fs.readFileSync("./db.json");
    return(JSON.parse(data));
    }catch (error){
        console.log(error)
    }
};


export const writeData = (data) => {
    try{
     fs.writeFileSync("./db.json", JSON.stringify(data));
    return data;
    }catch (error){
        console.log(error)
    }
};
