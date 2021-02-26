import React, { useState } from "react";
import EditMenu from './EditMenu'
import axios from "axios";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import {useHistory} from 'react-router-dom'

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const history = useHistory()

  // console.log(colors)
  // console.log(updateColors)
  
  const editColor = color => {
    // console.log(color)
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/colors/${colorToEdit.id}`, colorToEdit)
      .then(res=>{
        console.log(res)
        const newEditColor = colors.map(color=>{
          if(color.id === res.data.id){
            return res.data
          }
          else{
            return color
          }
        });
        updateColors(newEditColor)
      })

  };

  const deleteColor = color => {
    axiosWithAuth()
      .delete(`colors/${color.id}`, color)
      .then(res=>{
        console.log(res)
        const newColors = colors.filter(filterColor=>(
          filterColor.id !== color.id
        ))
        updateColors(newColors)

      })
      .catch(err=>{console.log(err)})

  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.