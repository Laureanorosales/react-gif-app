import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  // console.log(categories);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    if (categories.includes(newCategory)) return;
    // categories.push(onNewCategory);
    setCategories([newCategory, ...categories]);
    // setCategories([...categories, "One Piece"]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Aplicacion de Gifs</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* Listado de items */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* <li>ABC</li> */}

      {/* Gif Item */}
    </>
  );
};
