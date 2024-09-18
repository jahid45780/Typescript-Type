


let userInfo1: ()=> void
let userInfo2:(userName:string)=> void
let userInfo34: (userName:string, age:number )=> string

 userInfo1=()=>{
    console.log("Jahid");
}

userInfo2=(userName: string)=>{
    console.log(`${userName} this name `);
}

userInfo34=(userName: string, age:number )=>{
   return ` name ${userName} he ${age} year old `
}

userInfo1()
userInfo2("Jahid")
 console.log(userInfo34("korim", 4 ));