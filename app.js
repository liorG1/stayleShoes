const fs = require('fs');
 const path = "./cats.json"
 const obj = { nic_name: "tooli", color: "gray" };
if (fs.existsSync(path)) { 
    fs.readFile("cats.json", "utf8", (err, data) => {
    if (err) { console.log(err); } 
    const arr = JSON.parse(data);
    arr.push(obj);
    fs.writeFile("cats.json", JSON.stringify(arr), (err) => { 
        if (err) { console.log(err); } 
        console.log("success to update the array"); }) });}
        
else { const arr = [];
     arr.push(obj); 
     fs.writeFile("cats.json", JSON.stringify(arr), (err) => { 
        if (err) { console.log(err); } 
        console.log("success to create new array with the new obj"); }) 
    }

