const getText = (path) =>{
    return new Promise((resolve,reject) =>{
        readFile (path, (err,data) =>{
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}