const fs = require('fs');

/*initial code*/
/*
fs.writeFile('./1.txt', '11111', function(err) {
    console.log('1.txt created');
    fs.readFile('./1.txt','UTF-8', function(err,data1) {
        fs.writeFile('./2.txt',data1 + '22222', function(err) {
            console.log('2.txt created');
            fs.readFile('./2.txt','UTF-8', function(err,data2) {
                fs.writeFile('./3.txt',data2 + '33333', function(err) {
                    console.log('3.txt created');
                    fs.readFile('./3.txt','UTF-8', function(err,data3) {
                        console.log(data3);
                    });
                });
            });
        });
    });
});
*/


/*Promise*/

function readFile(fileName, type){
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName,type, (err,data)=>{
            err ? reject(err) : resolve(data);
        });
    });
}
function writeFile(fileName, content){
    return new Promise((resolve, reject)=>{
        fs.writeFile(fileName, content, (err)=>{
            err ? reject(err) : resolve();
        });
    });
}
writeFile('./1.txt', '11111')
    .then(()=>{
        console.log('1.txt created');
        return readFile('./1.txt','UTF-8');
    })
    .then((data1)=>{
        return writeFile('./2.txt',data1 + '22222');
    })
    .then(()=>{
        console.log('2.txt created');
        return readFile('./2.txt','UTF-8');
    })
    .then((data2)=>{
        return writeFile('./3.txt',data2 + '33333');
    })
    .then(()=>{
        console.log('3.txt created');
        return readFile('./3.txt','UTF-8');
    })
    .then((data3)=>{
        console.log(data3);
    })