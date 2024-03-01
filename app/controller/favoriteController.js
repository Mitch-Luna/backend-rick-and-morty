import express from 'express'
//Este archivo define las funciones del controlador 
//importar las funciones del modelo 
import { readData, writeData } from "../models/favoriteModel.js";
const favorite = express();
//funcion para obtener todos los favoritos 
export const index = ("/favorite", (req,res) => {
    const data=readData();
    res.json(data.favorite);
})
//funcion parqa obtener 1 favorito por su id 
favorite.get ("/favorite/:id", (req,res) => {
    const data=readData();
    const id = parseInt(req.params.id);
    const favorites = data.favorite.find((favorites)=> favorites.id === id);
    res.json(favorites)
})
//funcion parea crear un favorito
export const create = ("/favorite", (req,res) => {
    const data=readData();
    const body = req.body;
    const newFavorite ={
        id: data.favorite.length + 1,
        ...body,
    }
    data.favorite.push(newFavorite);
    writeData(data);
    res.json(newFavorite)
})
//funcion para editar 1 favorito por su id
favorite.put ("/favorite/:id", (req,res) => {
    const data=readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const favoriteIndex = data.favorite.findIndex((favorites) => favorites.id === id);
    data.favorite[favoriteIndex] = {
        ...data.favorite[favoriteIndex],
        ...body,
    }
    writeData(data)
    res.json({message:"actualizado"});
})
//funcion de eliminar un favorito
export const remove = ("/favorite/:id", (req,res) => {
    const data=readData();
    const id = parseInt(req.params.id);
    const favoriteIndex = data.favorite.findIndex((favorites) => favorites.id === id);
    data.favorite.splice(favoriteIndex, 1)
    writeData(data)
    res.json({message: "eliminado"})
})