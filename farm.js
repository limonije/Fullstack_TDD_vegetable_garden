//functions

// const getYieldForPlant = (object) => {
//     console.log(object.yield);
//     return object.yield;
// }

const getYieldForPlant = (object) => object.yield;

const getYieldForCrop = (object) => object.crop.yield * object.numCrops;

const getTotalYield = (object) => {
    let result = 0
    object.crops.forEach((crops) => {
    result += crops.crop.yield * crops.numCrops
    })
    return result;
}

//Modified initial functions for new functionalities
const getCostsForCrop = (object) => object.cost * object.numCrops;

const getRevenueForCrop = (object) => object.salesPrice * object.crop.yield * object.numCrops;

//const getProfitForCrop = (object) => ((object.salesPrice * object.crop.yield) - object.cost) * object.numCrops;
const getProfitForCrop = (object) => getRevenueForCrop(object) - getCostsForCrop(object);

// const getTotalProfit = (object) => {
//     let result = 0
//     object.crops.forEach((crops) => {
//     result += ((crops.salesPrice * crops.crop.yield) - crops.cost) * crops.numCrops;
//     })
//     return result;
// }

const getTotalProfit = (object) => {
    let result = 0
    object.crops.forEach((crops) => {
    result += getRevenueForCrop(crops) - getCostsForCrop(crops);
    })
    return result;
}

//Modified initial functions for to include environmental factors

const getYieldForPlantWith = (object, factor) => {
console.log(object.yield, factor.sun);    
if (factor.sun == "low") {
object.yield * ((100 + object.factor.sun.low)/ 100);
}}


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantWith,
};


