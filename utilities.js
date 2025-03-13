String.prototype.encode = function() {
    let hash = 0;
    for(let i = 0; i < this.length; i++){
        let char = this.charCodeAt(i);
        hash = (hash * 31 + char) % 1_000_000_007;
    }

    return hash.toString(16);
};

let str = "1234";
console.log(str.encode());
console.log("str".encode());
console.log("Hello".encode());
console.log("hello".encode());
console.log("hello!".encode());