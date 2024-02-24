console.log("Hello World, Node here.")

function add(a,b){
    return a+b;
}

console.log(add(1,2))

console.log(process.argv);

var args=process.argv.splice(2);

console.log("Result is : ",add(parseInt(args[0]),parseInt(args[1])));