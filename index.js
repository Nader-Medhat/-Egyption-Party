
// function User( name, age, gender, salary){
//   this.name = name
//   this.age = age
//   this.gender = gender
//   this.salary = salary


// }
// User.prototype.eat = function(meal){
//   console.log(meal);
// }


//  User.prototype.friend = ["Mohamed" , "Ali"]

// let Ahmed = new User ("Ahmed", 26, "male", 10000)
// let Sayed = new User ("Sayed", 25, "male", 15000)
// Ahmed.friend.push("Ali")
// console.log(Ahmed);
// console.log(Sayed);



// class User {
//   constructor(name, age, gender, salary) {
//   this.name = name
//   this.age = age
//   this.gender = gender
//   this.salary = salary
//   }
//   eat(meal) {
//     console.log(meal);
//   }
// }

// let mohamed = new User ("mohamed", 26, "male", 10000)

// console.log(mohamed);


$(".d-flex img").click((e) => {
  let targetimgsrc = $(e.target).attr("src")
  $(".master").fadeOut(100, () => {
    $(".master").attr("src",targetimgsrc).fadeIn(100)
  })
})