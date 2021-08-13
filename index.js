

function receivesAFunction(callback) {
   
    callback();
}

function saySomething() {
    console.log('Hey')
}

saySomething(receivesAFunction)


function returnsANamedFunction() {
    return saySomething();
}

//  let x = function() {
//      console.log(' Hey steve')
//  }
//  
//  let y = function(hey) {
//      console.log('do something')
//      hey();
//  }
//  
//  y(x);
















// function returnsANamedFunction(name) {
//     return name.toUpperCase()
// }
// 
// function returnsAnAnonymousFunction(callback) {
//     let pokemon = 'Pikachu'
//     callback(pokemon)
// } 
// 
// returnsAnAnonymousFunction(receivesAFunction);


// const printPokemon = (name) => {
//     console.log(`Today's popular pokemon is: ${name}`)
// }
// 
// const capitalizePokemon = (name) => {
//     console.log(name.toUpperCase())
// }
// 
// const createPokemon = (callback) => {
//     let pokemon = 'Pikachu'
//     callback(pokemon)
// }
// 
// createPokemon(printPokemon);
