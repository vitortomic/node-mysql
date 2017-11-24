const User = require('./user.js').User
const userRepository = require('./userRepository');

const createUser = async (firstName, lastName, email)=>{
    let user = new User(null, firstName, lastName, email);
    return await userRepository.saveUser(user);
}

const findById = async (id)=>{
    return await userRepository.findById(id);
}

const deleteUserById = async (id)=>{
    return await userRepository.deleteUser(id);
}

const searchUsers = async (params)=>{
    return await userRepository.searchUsers(params);
}

const updateUser = async (user)=>{
    return await userRepository.updateUser(user);
}

exports.createUser = createUser;
exports.findById = findById;
exports.deleteUserById = deleteUserById;
exports.updateUser = updateUser;
exports.searchUsers = searchUsers;