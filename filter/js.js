
class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }
  
  tellMyName (){
  return `I am ${this.name}
  }
  
  tellMyAge (){
  return `I am ${this.age}
  }
  
}

const john = new Person('John',40)
const mary = new Person('Mary', 35)

john.tellMyName()
john.tellMyAge()

mary.tellMyName()
mary.tellMyAge()