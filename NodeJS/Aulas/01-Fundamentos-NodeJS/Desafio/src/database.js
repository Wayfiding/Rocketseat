import fs from 'node:fs/promises'


const databasePath = new URL('../db.json', import.meta.url)

export class Database {
    #database = {}
    constructor (){
        fs.readFile(databasePath,'utf8').then(data=>{
            this.#database = JSON.parse(data)
        }).catch(err=>{
            this.#persist()
        })
    }
    #persist(){
        fs.writeFile(databasePath,JSON.stringify(this.#database))
    }
    select(table,search){
        let data = this.#database[table] ?? []
        
        if(search){
            data = data.filter(row =>{
                return Object.entries(search).some(([key,value]) =>{
                    return row[key].toLocaleLowerCase().includes(value.toLocaleLowerCase())
                })
            })
        }
        
        
        return data
    }
    insert(table,data){
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data)
        }else{
            this.#database[table] = [data]
        }
        this.#persist()
        return data;
    }
    delete(table,id){
        const rowIndex = this.#database[table].findIndex(row=>row.id === id)

        if(rowIndex > -1){
            this.#database[table].splice(rowIndex,1)
            this.#persist()
        }
    }
    
    update(table,id,data){
        const rowIndex = this.#database[table].findIndex(row=>row.id === id)
        if (rowIndex === -1) {
            return false; // Indica que o registro não existe
          }
        const { completed_at, created_at,description,title } = this.#database[table][rowIndex]
        const updated_at = new Date()
        if(rowIndex > -1){
            this.#database[table][rowIndex]={id,title:data.title? data.title : title,description:data.description ? data.description : description,completed_at:data.completed_at ? data.completed_at : completed_at,created_at,updated_at}
            this.#persist()
        }
    }
}