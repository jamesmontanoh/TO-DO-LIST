import React from "react";
import './TodoLoading.css';

function TodoLoading(){
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completedIcon"></span>
            <p className="LoadingTodo-text">Cargando TODO's...</p>
            <span className="LoadingTodo-deletedIcon"></span>
        </div>
    )
}

export {TodoLoading};