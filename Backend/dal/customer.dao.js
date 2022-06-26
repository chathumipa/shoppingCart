const customers = require('./index').db('shop').collection('customers');

const objectId = require('mongodb').ObjectId;

const save = async({name, email, phone, address}) => {
    const result = await customers.insertOne({name, email, phone, address});
    return result;
}

const getAll = async () => {
    const all = await customers.find();
    return all.toArray();
}

const getById = async (id) => {
    return await customers.findOne({_id:objectId(id)});
}

const update = async (id, {name, email, phone, address}) => {
    const result = await customers.replaceOne({_id:objectId(id)}, {name, email, phone, address});
    return result;
}

const removeById = async id => {
    await customers.deleteOne({_id:objectId(id)});
}

module.exports = {save, getAll, getById, update, removeById};