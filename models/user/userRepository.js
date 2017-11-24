const User = require('./user.js').User
const connectionService = require('../../connection.js').ConnectionService;

const connection = connectionService.connection;

const findById = async (id)=>{
    let query = `Select * from User where id=${connection.escape(id)}`;
    console.log(query);
    let result = await connectionService.executeQuery(query);
    result = result.length > 0 ?  result[0] : null;
    return result;
}

const searchUsers = async(params)=>{
    let paramsArray = params.map((param)=>formatParam(param));
    let query = `Select * from User where `;
    paramsArray.forEach((element, index)=>{
        index < paramsArray.length - 1 ? query += `${element} and ` : query += `${element}`;
    });
    console.log(query);
    return await connectionService.executeQuery(query);
}

/**
 * maps parameter to query like {"firstName" : "vitor"} -> "firstName=vitor"
 * @param {*} param 
 */
const formatParam = (param)=>{
    return `${Object.keys(param)[0]} like ${connection.escape(param[Object.keys(param)[0]])}`;   
}

const saveUser = (user)=>{
    let query = `Insert into User values (null, ${connection.escape(user.firstName)}, ${connection.escape(user.lastName)}, ${connection.escape(user.email)})`;
    return connectionService.executeQuery(query);
}

const deleteUser = (id)=>{
    let query = `Delete from User where id=${connection.escape(id)}`;
    return connectionService.executeQuery(query);
}

const updateUser = (user)=>{
    let query = `Update User set firstName=${connection.escape(user.firstName)}, lastName=${connection.escape(user.lastName)}, email=${connection.escape(user.email)}
                    where id=${connection.escape(parseInt(user.id))}`;
    console.log(query);
    return connectionService.executeQuery(query);
}

exports.saveUser = saveUser;
exports.findById = findById;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.searchUsers = searchUsers;