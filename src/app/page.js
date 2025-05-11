"use client";
import { useEffect, useState } from "react";
import SocialCard from "./app/components/SocialCard"; 

export default function Home() {
  const staticPosts = [
    {
      image: "https://images.unsplash.com/photo-1594142404563-64cccaf5a10f?q=80&w=3164&auto=format&fit=crop",
      caption: "Cookie seeing herself for the first time 😮",
    },
    {
      image: "https://placedog.net/400/300?id=1",
      caption: "Rain sleeping peacefully 😇",
    },
    {
      image: "https://images.unsplash.com/photo-1456796148441-485386946471?q=80&w=1740&auto=format&fit=crop",
      caption: "Morningg - from Whiskers 😽",
    },
  ];

  const [posts, setPosts] = useState(staticPosts);

  useEffect(() => {
    const savedPost = localStorage.getItem("newPost");
    if (savedPost) {
      const parsed = JSON.parse(savedPost);
      setPosts([parsed, ...staticPosts]);
    }
  }, []);

  return (
    <div className="flex-1 overflow-y-scroll snap-y snap-mandatory">
      <div className="flex flex-col items-center">
        {posts.map((post, index) => (
          <SocialCard key={post.image + index} image={post.image} caption={post.caption} />
        ))}
      </div>
    </div>
  );
}
