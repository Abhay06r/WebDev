const product = {
    name: "Parker jotter ball pen",
    Rating: 4,
    isDeal: true,
    price: 270,
    offer: 5
};

console.log(product);

const profile = {
    userName: "@shradhakhapra",
    isFollow: false,
    follower: "569k",
    posts: 195,
    fullName: "Shradha Khapra",
    designation: "Entrepreneur",
    bio: " Apna colloge | Ex-Microsoft, DARDO , To educate someone is the privilege"
};

console.log(profile);

// Arthimetic operators
let a = 5;
let b = 6
console.log("a=", a, "& b=", b);
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);
console.log("a%b=", a%b);
console.log("a**b=", a**b);

// Unary operators

console.log("a--=", a--);
console.log("a=", a);

console.log("--a=", --a);
console.log("a=", a);

console.log("a++=", a++);
console.log("a=", a);

console.log("++a=", ++a);
console.log("a=", a);


//Assigment operators
a += b; //a = a+b
console.log("a += b = ", a);

a -= b; //a = a-b
console.log("a -= b = ", a);

a *= b; //a = a*b
console.log("a *= b = ", a);

a **= b; //a = a**b
console.log("a **= b = ", a);

a %= b; //a = a%b
console.log("a %= b = ", a);

// Comparison operators

let c = 5;
let d = 6;

//equal to ==

console.log("5 == 6", a == b);//false
console.log("6 == 6", b == d);//true

//not equal to !=

console.log("5 != 6", a != b);//true
console.log("6 != 6", d != b);//false

//less than <

console.log("5 < 6", a < b);//true
console.log("6 < 5", b < a);//false

// greatar than 

console.log("5 > 6", a > b);//false
console.log("6 > 5", b > a);//true

// and so on greatar than equal to >= & less than equal to <=

//Logical Operator