"use script"

class Storage {
    constructor(name){
        this.name = name;
    };
    set (value){
            let key = this.name;
            let data = localStorage.setItem(key, JSON.stringify(value));
            return data;
        
    }
    get(){
        let data = JSON.parse(localStorage.getItem(this.name));
        if (data === null){
            return false;
        }
        console.log(data)
    }
    clear(){
        let data = localStorage.getItem(this.name);
        if(data == null){
            return;
        }
        localStorage.removeItem(this.name);
    }
    isEmpty(){
        let data = localStorage.getItem(this.name);
        if(data === null){
            return console.log(true);
        }
        else{
        return console.log(false);
    }
    }
}


let gg = [
    {surname :'good'},
]
const names = new Storage("names");
names.set(gg);
names.clear();
names.get();



