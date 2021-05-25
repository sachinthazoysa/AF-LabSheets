//creating the database(posts) and collection(posts)
const posts = require('./').db('posts').collection('posts');

//asynchronous function to save data
const save = async ({id, name, description, postedDate}) => {
    const result = await posts.insertOne({id, name, description,
        postedDate});
    return result.ops[0];
};


const getAll = async () => {
    const cursor = await posts.find();
    return cursor.toArray();
};

const getById = async id => {
    return await posts.findOne({id});
};

const removeById = async id => {
    return await posts.deleteOne({id});
}

const update = async (id, {name,description, postedDate})=>{
    const result = await posts.replaceOne({id},{id,name,description,postedDate});
    return result.ops[0];
}


module.exports = {save, getAll, getById, removeById, update};