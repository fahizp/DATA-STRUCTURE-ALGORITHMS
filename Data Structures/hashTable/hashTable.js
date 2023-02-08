class HashTable{
    constructor(size=50){
        this.table=new Array(size);
        this.size=size
    }

    hash(key){ //type string
       let total=0;
       for(var i=0;i<key.length;i++){
        total+=key.charCodeAt(i)
       } 
       return total % this.size
    } 
    
    set(key,value){
        const index=this.hash(key);
        this.table[index]=value;
        
    }

    get(key){
        const index=this.hash(key);
        return this.table[index]
    }

    remove(key){
        const index=this.hash(key);
        this.table[index]=undefined
    }

    display(){
        for(var i=0;i<this.table.length;i++){
            console.log("index:",i,"value:",this.table[i])
        }
    }


}
let ht = new HashTable()

