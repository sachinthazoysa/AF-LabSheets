const uuid = require('uuid');
const {getAll, getById, removeById, save, update} = require('../dal/posts.dao');

async function createPost({name,description}){
    let obj ={
        id:uuid.v4(),
        name:name,
        description:description,
        postedDate:new Date(),
    }

    return await save(obj);
}

async function getPosts(){
        return await getAll();
}

async function getPost(id){
    return await getById(id);
}

async function deletePost(id){
    return await removeById(id);
}

const updatePost = async (id, { name, description, postedDate }) => {
    postedDate = new Date();
    return await update(id, { id, name, description, postedDate });
}

module.exports = {createPost,getPosts,getPost,deletePost,updatePost};


