const uuid = require('uuid');

let postsMap = new Map();


function createPost({name,description}){

    let obj ={
        id:uuid.v4(),
        name,
        description,
        postedDate:new Date(),

    }
    postsMap.set(obj.id,obj);
    return obj.id;
}

function getPosts(){
    return [...postsMap.values()];
}

function getPost(id){
    return  postsMap.get(id);
}

module.exports = {createPost,getPosts,getPost};


