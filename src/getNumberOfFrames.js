const getNumberOfFrames = (sopInstance) => {
    if(sopInstance.dataSet.NumberOfFrames && 
        sopInstance.dataSet.NumberOfFrames > 0) {
        return parseInt(sopInstance.dataSet.NumberOfFrames)
    }
    return 1
}

module.exports = getNumberOfFrames