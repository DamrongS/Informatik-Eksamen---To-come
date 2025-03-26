// Creating a meta-method for the String method
String.prototype.hashEncode = function() {
    let h1 = 0x6a09e667;
    h2 = 0xbb67ae85; 
    h3 = 0x3c6ef372;
    h4 = 0xa54ff53a; 
    h5 = 0xc2b2ae35;
    let prime1 = 0x1000193; // Prime numbers
    let prime2 = 0x85ebca6b;
    let prime3 = 0x9e3779b1;
    let prime4 = 0x539764640;
    let prime5 = 0x86062664;
    let prime6 = 0x21600328;
    
    for (let i = 0; i < this.length; i++) {
        let char = this.charCodeAt(i);

        // Mix the character into different hash states
        h1 ^= (char + (h2 << 5) - (h3 >> 2));
        h2 ^= (char + (h3 << 7) - (h4 >> 3));
        h3 ^= (char + (h4 << 11) - (h1 >> 5));
        h4 ^= (char + (h1 << 13) - (h2 >> 7));
        h5 ^= (char + (h4 << 13) - (h1 >> 7));

        // Multiply by prime numbers for further diffusion
        h1 = (h1 * prime1^prime3*prime4^prime6*prime5) >>> 0;
        h2 = (h2 * prime2^prime3*prime4^prime6*prime5) >>> 0;
        h3 = (h3 * prime1^prime3*prime4^prime6*prime5) >>> 0;
        h4 = (h4 * prime2^prime3*prime4^prime6*prime5) >>> 0;
        h5 = (h5 * prime1^prime3*prime4^prime6*prime5) >>> 0;
    }
    
    // Final mixing step to increase randomness
    let finalHash1 = (h1 ^ (h3 >>> 16) * h5) >>> 0;
    let finalHash2 = (h2 ^ (h4 >>> 16) * h5) >>> 0;
    let finalHash3 = (h3 ^ (h5 >>> 16) * h1) >>> 0;
    
    return (finalHash1.toString(16) + finalHash2.toString(16) + finalHash3.toString(32)).padStart(16, '0');
};

let str = "password";
console.log(str.hashEncode());