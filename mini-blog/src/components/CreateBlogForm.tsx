"use client";

import { FormEvent, useState } from "react";

function CreateBlogForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitArticle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      id: Math.ceil(Math.random() * 100).toString(),
      title,
      description,
    };

    const res = await fetch("http://localhost:3001/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log({res});
  };

  return (
    <form onSubmit={submitArticle}>
      <input
      className="border"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <br />
      <textarea
      className="border"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      ></textarea>
      <br />
      <button type="submit">submit</button>
    </form>
  );
}

export default CreateBlogForm;
