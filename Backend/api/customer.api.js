const {save, getAll, getById, update, removeById} = require('../dal/customer.dao');

const setCustomer = async ({name, email, phone, address}) => {
    const customer = {
        name,
        email,
        phone,
        address
    }

    return await save(customer)
}

const getAllCustomers = async () => {
    return await getAll();
}

const getCustomer = async id => {
    return await getById(id);
}

const deleteCustomer = async id => {
    return await removeById(id);
}

const updateCustomer = async (id, {name, email, phone, address}) => {
    return await update(id, {name, email, phone, address});
}

module.exports = {
    setCustomer,
    getAllCustomers,
    getCustomer,
    deleteCustomer,
    updateCustomer
}