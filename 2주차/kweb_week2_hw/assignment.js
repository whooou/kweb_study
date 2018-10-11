const fs = require('fs');

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

