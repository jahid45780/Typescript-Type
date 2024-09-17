// numeric enum

enum reqType{
    readData =1,
    saveData,
    deleteData
    
}

// string enum

enum req2{
    saveData="data",
    deleteData="deleteAll"

}

// 2 condition clg

// console.log(req2.saveData);
console.log(req2["saveData"]);



// heterogenous enum
enum req3{
    saveData="data",
    deleteData="deleteAll",
     id = 102
}

