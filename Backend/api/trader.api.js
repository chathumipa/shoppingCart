const {save, getAll, getById, update, removeById} = require('../dal/trader.dao');

const setTrader = async ({name, email, phone, address}) => {
    const trader = {
        name,
        email,
        phone,
        address
    }

    return await save(trader)
}

const getAllTraders = async () => {
    return await getAll();
}

const getTrader = async id => {
    return await getById(id);
}

const deleteTrader = async id => {
    return await removeById(id);
}

const updateTrader = async (id, {name, email, phone, address}) => {
    return await update(id, {name, email, phone, address});
}

module.exports = {
    setTrader,
    getAllTraders,
    getTrader,
    deleteTrader,
    updateTrader
}