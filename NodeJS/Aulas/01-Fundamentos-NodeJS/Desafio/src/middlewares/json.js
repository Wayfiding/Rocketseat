export async function json(req,res){
    if (req.headers['content-type'] === 'application/json'){
    const buffers =[];
    for await (const chunk of req){
        buffers.push(chunk)
    }
    try {
        
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        req.body= null
    }
    res.setHeader('Content-Type', 'application/json')
    }
    
}