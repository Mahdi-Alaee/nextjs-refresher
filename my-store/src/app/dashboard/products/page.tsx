"use client";

import { ProductBoxProps } from "@/components/ProductBox";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardProductBox from "../components/DashboardProductBox";

function Products() {
  const [newProduct, setNewProduct] = useState<{
    title: string;
    image: string;
    price: string;
    id?: string;
  }>({
    title: "",
    image: "",
    price: "",
  });
  const [products, setProducts] = useState([] as ProductBoxProps[]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await fetch("http://localhost:3001/products");
    const data = await res.json();
    setProducts(data.reverse());
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const addProduct = async () => {
    const res = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: crypto.randomUUID(),
        ...newProduct,
      }),
    });
    if (res.status === 201) {
      console.log("wow so easy");
      loadProducts();
      clearForm();
      toast("product created successfully!", {
        type: "success",
      });
    }
  };

  const editProduct = async () => {
    const res = await fetch("http://localhost:3001/products/" + newProduct.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (res.status === 200) {
      toast.success("The product is edited successfully");
      clearForm();
      loadProducts();
    } else {
      toast.error("The product isn't edited");
    }
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEditing) {
      editProduct();
    } else addProduct();
  };

  const deleteProduct = async (id: string) => {
    console.log({ id });

    const res = await fetch("http://localhost:3001/products/" + id, {
      method: "DELETE",
    });
    if (res.status === 200) {
      loadProducts();
      toast.success("The product is deleted successfully");
    } else {
      toast.error("The product isn't deleted");
    }
  };

  const clearForm = () => {
    setIsEditing(false);
    setNewProduct({
      image: "",
      price: "",
      title: "",
      id: undefined,
    });
  };
  return (
    <div className="mb-12">
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col max-w-xl mx-auto p-2 gap-y-2 bg-slate-300"
      >
        <h1 className="text-2xl text-center pb-2">
          {isEditing ? "Edit" : "Add"} product form
        </h1>
        <input
          onChange={onInputChange}
          name="title"
          value={newProduct.title}
          className="p-2"
          type="text"
          placeholder="title ..."
        />
        <input
          onChange={onInputChange}
          value={newProduct.image}
          name="image"
          className="p-2"
          type="text"
          placeholder="image ..."
        />
        <input
          onChange={onInputChange}
          value={newProduct.price}
          name="price"
          className="p-2"
          type="text"
          placeholder="price ..."
        />
        <div className="grid">
          <button
            type="submit"
            className="bg-sky-500 py-2 text-gray-200 text-lg duration-100 hover:bg-sky-600"
          >
            {isEditing ? "Edit" : "Add"}
          </button>
          {isEditing && (
            <button
              onClick={clearForm}
              className="bg-gray-500 py-2 text-gray-200 text-lg duration-100 hover:bg-gray-600"
            >
              Cancel editing
            </button>
          )}
        </div>
      </form>

      <div className="flex flex-col gap-y-6 mt-24">
        <h2 className="text-center text-4xl">Products List</h2>
        {products.map((prd) => (
          <DashboardProductBox
            key={prd.id}
            {...prd}
            deleteProduct={deleteProduct}
            setIsEditing={setIsEditing}
            setNewProduct={setNewProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
