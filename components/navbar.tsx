"use client"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
export default function Navbar(){
const [isonSearch , setIsOnsearch] = useState(false)
const [isclick , setisClick] =useState(false)
    return (
        <nav className={`flex  justify-between   w-screen  h-[100px] ${isonSearch === false ? " bg-gray-700" : "-inset-0.5 bg-white blur   opacity-50"}`}>
<div className=" flex  gap-2 justify-center items-center ml-4">
  
<Image 
    height={70}
    width={90}
src="/images/player1.png"
alt=""
className=" rounded-lg"
    />  <h1 className=" text-black text-[30px] ml-3">Power</h1>
</div>
<div className=" flex gap-2  mr-7 mt-3">
<Link href={"/"}>
<Image 
    height={70}
    width={60}
src="/icons/home.svg"
alt=""
className=" rounded-lg"
    />
</Link>
<Link href={"/search"}>
<Image 
    height={70}
    width={60}
src="/icons/search.svg"
alt=""
className=" rounded-lg"
onClick={()=> setIsOnsearch(true)}
    />
</Link>

<Link href={"/saved"}>
<Image 
    height={70}
    width={60}
src="/icons/discover.svg"
alt=""
className=" rounded-lg"
    />
</Link>
<Link href={"/create"}>
<Image 
    height={70}
    width={60}
src="/icons/images.png"
alt=""
className=" rounded-lg"
    />
</Link>
<div className=" flex flex-col  gap-2  items-center ml-5 "  onClick={()=> setisClick((pre) => !pre)}>
<Link href={"/user/edit"}  className={ `flex flex-col gap-3 ${isclick == false ? "hidden" :" mt-3 visible  bg-black  h-[50px] w-[50px] rounded-lg"}  `}>
<Image 
    height={70}
    width={60}
src="/icons/edit.svg"
alt=""
className=" rounded-lg"
    />
    </Link>
    <UserButton  afterSignOutUrl="/sign-in" />
</div>
</div>

        </nav>
    )
}
