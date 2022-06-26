const traders = require('./index').db('shop').collection('traders');

const objectId = require('mongodb').ObjectId;

const save = async({name, email, phone, address}) => {
    const result = await traders.insertOne({name, email, phone, address});
    return result;
}

const getAll = async () => {
    const all = await traders.find();
    return all.toArray();
}

const getById = async (id) => {
    return await traders.findOne({_id:objectId(id)});
}

const update = async (id, {name, email, phone, address}) => {
    const result = await traders.replaceOne({_id:objectId(id)}, {name, email, phone, address});
    return result;
}

const removeById = async id => {
    await traders.deleteOne({_id:objectId(id)});
}

module.exports = {save, getAll, getById, update, removeById};