const {readFile, writeFile} =require('fs').promises

// const util = require('util'); //what is util???
// const readFilePromise = util.promisify(readFile) //what does this do...what use??
// const writeFilePromise = util.promisify(writeFile)

// const getText = (path) =>{
//     return new Promise((resolve,reject) =>{
//         readFile (path, 'utf8' , (err,data) =>{
//             if (err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

const start = async () => {
    try{
        const first = await readFile('./content/first.txt' , 'utf8') //what is reafFilePromise???
        await writeFile('./content/result-mind-grenade.txt','This is Aweseome Dude!!! Am doing it!!!'
        {flag: 'a'})//flag a appens the content tyo the new file instead of erasing the 
                    //previous content of the file
        console.log(first)
    } catch (error){
        console.log(error)
    }
}

start()

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

