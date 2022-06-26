const {save, getAll, getById} = require('../dal/login.dao');

const setLogin = async ({email, type, password}) => {
    const login = {
        email,
        type,
        password
    }

    return await save(login)
}

const getAllLogins = async () => {
    return await getAll();
}

const getLogin = async id => {
    return await getById(id);
}

module.exports = {
    setLogin,
    getAllLogins,
    getLogin
}