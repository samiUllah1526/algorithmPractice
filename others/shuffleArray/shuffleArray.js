const shuffleArray = (array) => {

    const list = [...array];
    for(let index = list.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [list[index], list[randomIndex]] = [list[randomIndex], list[index]]
    }

    return list
}

let originalArray = [1, 2, 3];
// let array = [{id:1}, {id:2}, {id:3}];
const shuffled = shuffleArray(array)

console.log({
    shuffled,
    originalArray
})