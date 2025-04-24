"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

function Products() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    image: "",
    price: "",
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const onAddProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000).toString(),
        ...newProduct,
      }),
    });
    if(res.status === 201){
        console.log('wow so easy');
        toast('product created successfully!',{
            type:'success',
        })
    }
  };

  return (
    <div className="">
      <form
        onSubmit={onAddProduct}
        className="flex flex-col max-w-xl mx-auto p-2 gap-y-2 bg-slate-300"
      >
        <h1 className="text-2xl text-center pb-2">Add product form</h1>
        <input
          onChange={onInputChange}
          name="title"
          className="p-2"
          type="text"
          placeholder="title ..."
        />
        <input
          onChange={onInputChange}
          name="image"
          className="p-2"
          type="text"
          placeholder="image ..."
        />
        <input
          onChange={onInputChange}
          name="price"
          className="p-2"
          type="text"
          placeholder="price ..."
        />
        <button
          type="submit"
          className="bg-sky-500 py-2 text-gray-200 text-lg duration-100 hover:bg-sky-600"
        >
          add
        </button>
      </form>

      <div>لیست محصولات ...</div>
    </div>
  );
}

export default Products;
