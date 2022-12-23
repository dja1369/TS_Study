type sampleData = {
    id : string
    data : string
}
const sampleDatas: sampleData = {
    id : "HOHO",
    data : "SomeThing"
}

const sampleFunc= (data: sampleData): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (data.id === "HOHO"){
//        if(data["id"] === "HOHO"){
            resolve("WoW HOHO A JER SEE YA! ")
        }
        else{
            reject("HOHO A JER SEE GA A NI YA..")
        }
    })
}


console.log(sampleFunc(sampleDatas))