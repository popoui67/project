import mongoose from "mongoose";
const Post = new mongoose.Schema({
    title :{type :String , required :true , unique :true} ,
    description : {type :String , required :true} ,
    like :{type :Number , required :true , default :0} ,
    image : {type :String , required :true} ,
    PosterName :{type :String , required :true , unique :true },


})

const saved = new mongoose.Schema({
id :{type : String , required :true , unique :true }
})
export const PostSchema = mongoose.models.Post || mongoose.model("Post" , Post)
export const SavedPostSchema = mongoose.models.Ids || mongoose.model("Ids" , saved)