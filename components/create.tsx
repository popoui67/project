"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "./ui/button"
import {UploadButton} from "../lib/utils"
import { Input } from "./ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { CreatePostOnDb } from "@/lib/user.action"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function CreatePost(){

  const router =useRouter()
  const [image , setImage] =useState("")
  const [disable , setDisable] =useState(true)
    const formSchema = z.object({
        title: z.string().min(2).max(50),
        description: z.string().min(2).max(50),
        PosterName :z.string().min(2).max(50).optional()
      })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title :"",
          description:"",
          PosterName : ""

        },
})
     function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
      const value ={
        ...values ,
        like :0,
        image :   image,
      }
      try{
         CreatePostOnDb(value)
router.push("/")
      }
      catch(err) {
        console.log(err)
      }
      
    }
    
   
    return (
      <div className=" mt-20  bg-slate-500 rounded-lg p-4 m-4">
   <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
                
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
                
              </FormItem>
            )}
          />
   <UploadButton
     appearance={{
      button({ ready, isUploading }) {
        return `custom-button ${
          ready ? "custom-button-ready" : "custom-button-not-ready"
        } ${isUploading ? "custom-button-uploading" : ""}`;
      },
      container: "custom-container",
      allowedContent: "custom-allowed-content",
    }}
  
        endpoint="imageUploader"
        onClientUploadComplete={(res  ) => {
          console.log(res)
         if(res[0]?.url !== undefined || null && String(!res[0].url).includes("http") ){
          setImage(String(res[0]?.url ))
          setDisable(false)
         }else {
          alert ("invalid url")
         }
         
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
  
          alert(`ERROR! ${error.message}`);
        }}
        
  
      />
           <FormField
            control={form.control}
            name="PosterName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PosterName</FormLabel>
                <FormControl>
                  <Input placeholder="PosterName" {...field} />
                </FormControl>
                <FormMessage />
                
              </FormItem>
            )}
          />
                  <Button disabled={disable} type="submit">Submit</Button>
        </form>

      </Form>

      </div>
     
    )
}


