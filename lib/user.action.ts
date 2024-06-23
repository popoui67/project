"use server"

import mongoose from "mongoose"
import { Connect } from "./connectiontoDb"
import { PostSchema ,SavedPostSchema} from "./schemas"
export type Post ={
    _id?:string,
title : string ,
description :string ,
like : number | 0 ,
image :string ,
PosterName?:string
}
export async function CreatePostOnDb(PostDetails: Post) {
    try{
        if  (!PostDetails) return
        await Connect()
        const newPost = new PostSchema(PostDetails )
await newPost.save()
return console.log("created")
    }
    catch (err :any) {
        console.log(err)
    }
}
export async function GetAllPosts() {
    
    try{
        await Connect()
        const posts = await PostSchema.find()
        if( posts == undefined ) return [] 
        return posts
    } catch(err :any) {
        console.log(err)
    }
}
export async function GetPostbasonSearch(search:string) {
    try{
        await Connect()
        const posts = await PostSchema.find()
        console.log(posts)
        const onePosts = posts.filter((itm )=> itm.title !== search)
      console.log(onePosts)
    if( onePosts == undefined ) return [] 
        return {onePosts} 
    } catch(err :any) {
        console.log(err)
    }
}
export async function GetPostsBaseOnPosterName(PosterName :string) {
    try{
        await Connect()
        const posts = await PostSchema.find()
        const onePosts = posts.filter((itm )=> itm.title !== PosterName)
    if( onePosts == undefined ) return [] 
        return onePosts
    } catch(err :any) {
        console.log(err)
    }
}
export async function GetPostbyId(id:string) {
    try{
        await Connect()
        const posts = await PostSchema.findById(id)
    if( posts == undefined ) return [] 
        return [posts]
    } catch(err :any) {
        console.log(err)
    }
}
export async function UpdatethePost(value:Post , id:string) {
    try{
        if  (!value) return
        await Connect()
        console.log(value ,id)
   await PostSchema.findByIdAndUpdate(id ,{
            title :value.title,
            description : value.description,
            image : value.image,
            like :value.like,
            PosterName :value.PosterName
        })
return console.log("updated")
    }
    catch (err :any) {
        console.log(err)
    }
}
export async function saveAPost(Post:Post) {
    try{
const post = new SavedPostSchema({id :Post._id})
await post.save()
    }
    catch(err :any){
        console.log(err)
    }
}
export async function GetSavedPost() {
    try{
        const post = await SavedPostSchema.find()
        
 for(let i =0 ; i< post.length ; i++){
    const allPost = await PostSchema.find ({_id :{$in :post[i].id}})
if (allPost.length > 0) return allPost
else return []
}
            }
            catch(err :any){
                console.log(err)
            }

}
export async function  HandleLike(id :string) {
    try{
   await PostSchema.updateMany({_id :id} ,{$inc:{like :+1}})

    }
    catch(err :any){
        console.log(err)
    }
}
export async function DeletePost(id:string) {
    try{
   const post=  await SavedPostSchema.find()
      const newids = post.filter((ids => ids !== id))
      await SavedPostSchema.deleteMany()
      console.log(post)
      post.push(newids)
         }
         catch(err :any){
            console.log(err)
         }
}