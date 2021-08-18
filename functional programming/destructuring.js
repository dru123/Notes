// // let arr=["Jaskaran","Singh",24,"Indian"];
// // let name=arr[0];
// // let lastname=arr[1];

// //rather than doing this we do destructuring
// // let [name,lastname,,Nationality]=arr;
// //default value
// // let [name,lastname,,Nationality,mentor="Web"]=arr;

// // let person={
//     // name:"Jaskaran",
//     // country:"Canada",
//     // job:"Analyst"
// //};
// // Nationality is alias for country and you can also provide default value;
// // let{name,country:Nationality,abc="hello",job}=person;

// // const object = {
// //     message: 'Hello, World!'
// //     };
// //     function logMessage(){
// //         // this=object;
// //     console.log(this.message); // "Hello, World!"
// //     }

// // logMessage=logMessage.bind(object);
// // logMessage();

// // const object = {
// //     who: 'World',
// //     greet() {
// //     return `Hello, ${this.who}!`;
// //     },
// //     farewell: () => {
// //     return `Goodbye, ${this.who}!`;
// //     }};

// //     console.log(object.greet()); // What is logged?
// // console.log(object.farewell()); // What is logged?


// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     getDetails(){
//         console.log(this);
//         console.log(`His name is ${this.name} age is ${this.age}`);
//     }
//     setDetails(newName,newAge){
//         this.name=name;
//         this.age=age;
//     }
// }

// let Binod=new Person("Binod",23);
// Binod.getDetails();
// Binod.setDetails("Ravi",24);
// Binod.getDetails();
// //window
// // document.querySelector("button").addEventListener("click",Binod.getDetails)
// // setTimeout(Binod.getDetails,1000);
// // let fn=Binod.getDetails;
// //undefined 
// fn();