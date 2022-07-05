const http = require('http')


const server = http.createServer((req,res)=> {
    if(req.url=='/home')
    {   res.statusCode=200
        res.write('marehba fi home')
    } else if(req.url=='/contact'){
        res.statusCode=200
        res.write('marehba fi contact')
    } else if(req.url=='/about'){
        res.statusCode=200
        res.write('marehba fi about')
    } else 
           {
            res.statusCode=404
            res.write('not found')
           }
    res.end()
   
})

server.listen(5000,()=>console.log('server running on port 5000'))

