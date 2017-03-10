// var axios = require('axios');
import axios from 'axios'; //es6

function getRepos(username){
    //es6 backtick function for string literals. used with ${} for variable names
    return axios.get(`https://api.github.com/users/${username}/repos`);
};

function getUserInfo(username){
    return axios.get(`https://api.github.com/users/${username}`);
};


    ///  es6 function helper. no need for function keyword
    export default function getGithubInfo(username){
       return axios.all([getRepos(username), getUserInfo(username)])
    ////    es6 arrow helper. it has no binding of *this* keyword cos it doesn't create a new context
        .then((arr) => ({repos: arr[0].data, bio: arr[1].data}))
    }


// module.exports = helpers;

// export default helpers // es6