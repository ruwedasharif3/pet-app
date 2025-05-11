"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPostPage() {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !caption) return;

    const newPost = { image, caption };
    localStorage.setItem("newPost", JSON.stringify(newPost));
    router.push("/"); 
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Pin a New Post 📌</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white p-1 rounded hover:bg-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
