function _hash(key){
    let total =0;
    let prime = 31;

    for (let i = 0; i < math.min(key.length,100); i++) {
        let char = key[i]

        var value= char.charCode(0)-96

        total = (total*prime+value)%key.length
        
    }
    console.log(total);
return total
}


_hash("fahiz")
