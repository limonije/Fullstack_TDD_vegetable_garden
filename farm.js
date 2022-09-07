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

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
};
