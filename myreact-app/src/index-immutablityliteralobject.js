//immutablity testing


//whether this function is pure or not
//pure function means never modifes data,if want , then you have to return immutable
//data structure. : dont mutate original object.

//this function not pure function , because it modifies same memory address
// function updateProfile(city, profile) {
//     console.log('Previous Profile', profile);
//     //update logic : mutable or immutable ? 
//     profile.city = city;
//     //return profile after update
//     return profile;
// }

//pure function :
/**
 * 
 * 
 *  
 */
//plain pattern
// function updateProfile(city, profile) {
//     console.log('Previous Profile', profile);
//     //way 1; return plain new object
//     //create new object, by copying old object properties,
//     //while copying , change the property which you want to update
//     return {
//         id: profile.id, // no change
//         name: profile.name,
//         city: city
//     }

// }

// function updateProfile(city, profile) {
//     console.log('Previous Profile', profile);
//     //way 2; Object.assign api
//     // return Object.assign({}, profile, { city: city })
//     return Object.assign({}, profile, { city })

// }
//using spread operator
function updateProfile(city, profile) {
    console.log('Previous Profile', profile);
    //way 3; spread operator (...)
    // return { ...profile, city: city }
    return { ...profile, city }

}
//send profile object for modification
let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Chennai'
}

//req, i want to update profile city 

//how to test pure function?
//we have javascript api
Object.freeze(profile);
let updatedProfile = updateProfile('Coimbatore', profile);
console.log('Current Profile ', updatedProfile);