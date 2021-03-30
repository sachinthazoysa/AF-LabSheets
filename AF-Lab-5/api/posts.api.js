const uuid = require('uuid');

let postsMap = new Map();


function createPost({_name,_description}){

    let obj ={
        id:uuid.v4(),
        postedDate:new Date(),
        name : _name,
        description : _description
    }
    postsMap.set(`${obj.id}`,{obj});
    return obj.id;
}

function getPosts(){
    return [...postsMap.values()];
}

function getPost(id){
    return  postsMap.get(id);
}

module.exports = {createPost,getPosts,getPost};


