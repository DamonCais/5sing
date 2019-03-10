const songApi = require('./api/songApi');
const calorieApi = require('./api/calorieApi');
const recipeApi = require('./api/recipeApi');
const tvApi = require('./api/tvApi');

var getSongApi = function(type) {
    return async function(ctx) {
        const obj = ctx.query
        let res = await songApi[type](obj);
        ctx.body = res.data;
    }
}
var getCalorieApi = function(type) {
    return async function(ctx) {
        const obj = ctx.query
        let res = await calorieApi[type](obj);
        ctx.body = res.data;
    }
}
var getRecipeApi = function(type) {
    return async function(ctx) {
        const obj = ctx.query
        let res = await recipeApi[type](obj);
        ctx.body = res.data;
    }
}
var getTvApi = function() {
    return async function(ctx) {
        const obj = ctx.query
        let res = await tvApi(obj);
        ctx.body = res.data;
    }
}


module.exports = {
    getSongApi,
    getCalorieApi,
    getRecipeApi,
    getTvApi
};