// Netflix & Spotify



// Importação de clientes via CSV (Excel)
// 1gb - 1.000.000 
// Post /upload import.csv

// 10mb/s - 100s

// 100s - > Inserções no banco de dados

// 10mb/s -> 10.000 


// Readable Streams / Writable Streams



// Importação de clientes via JSON

process.stdin.pipe(process.stdout)

import {Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
    index= 1;

    _read(){

    setTimeout(() =>{
        const i = this.index++
        if(i>=100){
            this.push(null)
        }else{
            const buf = Buffer.from(String(i))
            this.push(buf)
        }
    },1000)
    
       
    }
    

}

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback){
        console.log(Number(chunk.toString()) * 10)
        callback()


    }
}

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1
        callback(null, Buffer.from(String(transformed)))
    }
}
new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream())