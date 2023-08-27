const http=require('http')

//ברגע שיש פנייה לשרת 3000 תןדפס הודעה
const server=http.createServer((req,res)=>{
    console.log("request made");
    if (req.method=='GET'){
        if (req.url=='/home'){
            res.write('wellcome to home page')
        }
        else if(req.url=='/users'){
            res.write('shimon , david')
        }
        else {
            res.write('404 not found')
        }
    }
    
    if (req.method=='POST'){
        if (req.url=='/users'){
            res.write('post new users')
        }
        else{
            res.write('404 not found')
        }
    }

    res.end();
})

//מאזין באופן קבוע לשרת 3000
server.listen(3000,"localhost",()=>{
    console.log('listining for request on port 3000');
})