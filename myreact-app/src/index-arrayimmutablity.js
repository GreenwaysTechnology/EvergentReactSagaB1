

//array immutablity


//add new elements
// function addItem(item, list) {
//     console.log('Before add', list);
//     return list.push(item);
// }

//immuability ;
// function addItem(item, list) {
//     console.log('Before add', list);
//     return list.concat(item);
// }
function addItem(item, list) {
    console.log('Before add', list);
    return [...list, item];
}

let list = [1, 2, 3];
//add new item : push : is pure or not
Object.freeze(list);
let result = addItem(4, list);
//console.log('After add', list);

console.log(result);

// if update,delete,filter:

//array immutable apis
/**
 * 1.map => new array after transformation
 * 2.filter =>new array : update and delete,search or find new element.
 * 
 */
function searchByCity(city, profiles) {
    return profiles.filter(profile => profile.city === city);
}

let profiles = [
    {
        id: 1,
        city: 'coimbatore'
    },
    {
        id: 2,
        city: 'coimbatore'
    },
    {
        id: 3,
        city: 'chennai'
    },
    {
        id: 4,
        city: 'delhi'
    },
    {
        id: 5,
        city: 'pune'
    }
]
const filteredProfiles = searchByCity('pune', profiles);
console.log(filteredProfiles);














