const createWoodBlock = () => {
    const rawMaterial = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"


    }
    return rawMaterial

}

const createBeautifulCarving = (woodObject) => {
    const stringRepresentation = `The ${woodObject.length}-inch, ${woodObject.material} woodblock was carved into a ${woodObject.purpose}`
    return stringRepresentation
}

const woodBlock = createWoodBlock()

const carvingString = createBeautifulCarving(woodBlock)

console.log(carvingString)



