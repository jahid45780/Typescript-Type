// let users: Object[]
// users = []

// let user1 : {FullName: string , Roll:number}
// user1= { FullName:"Jahid", Roll:123 }
// users.push(user1)
// console.log(users);


// custom type

let users: Object[]
users = []

type user ={FullName: string , Roll:number}

let user1 : user
user1= { FullName:"Jahid", Roll:123 }
users.push(user1)


let user2 : user
user2= { FullName:"Hasan", Roll:1123 }
users.push(user2)
console.log(users);