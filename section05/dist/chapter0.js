const person = {
    name: "강동현",
    age: 27,
    sayHi: () => console.log("hi"),
    sayHello() {
        console.log(`hello my name is ${this.name}`);
    }
};
export {};
