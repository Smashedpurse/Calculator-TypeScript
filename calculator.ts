const operations = ["multiply","add","divide"]
type operation = 'multiply' | 'add' | 'divide'
type Result = number

const calculator = (a:number, b:number, op:operation ) : Result =>{

    if(op == "multiply")return a * b 
    if(op == "add")return a + b 
    if(op = "divide"){
        if(b === 0) throw new Error ("cant divide by 0 ")
        return a / b ;
     }

    throw new Error ("Operation is not valid");
}

console.log(process.argv);