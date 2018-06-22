import {foo,testArray} from "./foo.js";
console.log("hello world from webpack this is for testingaefaesfergre"); 
let z=`gigu`;
let z1=`${z} dffeff`;
console.log(z1);


{
	let z=`gigu`;
	let a =[30,40,50,60,70,"deepti","srivastava",`${z}`];
	let b= [10,...a, 90];
	console.log(b);
}

let chees=()=>{
	console.log("Example of anonemus arrow function: deepti Srivastaav");
}
chees();


var seeexp=foo;
console.log(seeexp());
console.log([...new Set(testArray)]);


/*const root="https://googleapis.com/books/v1/volumes?q=";
fetch(root,{method : "GET"})
.then(response=>response.json())
.then(json=>console.log(json));*/


//ReactDOM.render(
//<div>React Application<div>,
//document.getElementById("root")
//);
let zz;
console.log("closure");

{
	let x=2;
	zz=()=>{
		let y=3;
		return x+y;
	}
}
console.dir(zz);