"use client"
import { HandleLike, Post, saveAPost,DeletePost } from "@/lib/user.action";
import Image from "next/image";
import { Button } from "./ui/button";
export default function Card ( {posts  ,isonSaved }:{ posts :Post ,isonSaved? :boolean }){
    return (
        <div className=" bg-slate-100 rounded-lg p-4  flex flex-col gap-3 items-center ">
            <p>{posts.title} </p>
            <Image
            src={posts?.image}
            width={300}
            height={150}
            alt=""
            className=" rounded-lg"
            />
            <h3>{posts.description}</h3>
            <p>{posts.PosterName}</p>
          
            <div className=" flex gap-6 items-center justify-between">
            <Image
src="/icons/1.png"
width={30}
height={30}
alt=""
className=" rounded-md" 
onClick={()=> {HandleLike(posts._id as string) , window.location.reload()}}
/>
{posts.like  && <span>{posts.like}</span>}
 { isonSaved === false &&(<Image 
src="/icons/téléchargement.png"
width={30}
height={30}
alt=""
className=" rounded-md"
onClick={()=> saveAPost(posts)}
/>
)}
{isonSaved === true && (
    <Image
    src="/icons/delete.svg"
    width={30}
    height={30}
    alt=""
    className=" rounded-md bg-black"
    onClick={()=> DeletePost(posts?._id as string)}
    />

)}
            </div>




        </div>
    )
}