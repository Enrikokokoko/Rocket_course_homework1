
const fs = require('fs').promises;
const path = require('path');



fs.writeFile('./boys/Horikita.json', '{"gender":"female"}')
fs.writeFile('./boys/Johan.json', '{"gender":"male"}')
fs.writeFile('./boys/Lelouch.json', '{"gender":"male"}')
fs.writeFile('./girls/Kiyotaka.json', '{"gender":"male"}')
fs.writeFile('./girls/Anna.json', '{"gender":"female"}')
fs.writeFile('./girls/Shirley.json', '{"gender":"female"}')

const maindDir = path.join(__dirname)

fs.readdir(maindDir)
    .then(value => {
    //  value.forEach(element=>{
    //     let dir = element

    console.log(value);
    for (const string of value) {

       let dir = string;
        if(dir === 'appp.js'){
         continue;
        }

    fs.readdir(path.join(dir))
    .then(value =>{
        
        for(const key of value){
            const fileWay = path.join(dir,key);

       
            fs.readFile(fileWay)
            .then(value =>{
                let fileJson = JSON.parse(value)
              
                if(fileJson.gender === 'male' || typeof fileJson.gender === string) {
                    let boysPath = path.join('./boys',key)
                    fs.rename(fileWay,boysPath).then()
                }
                if (fileJson.gender === 'female' || typeof fileJson.gender === string) {
                    let girlsPath = path.join('./girls',key)
                    fs.rename(fileWay,girlsPath).then()
                }
            })
        }     
    })}
})
    .catch(e => {

    console.error(e);
})

