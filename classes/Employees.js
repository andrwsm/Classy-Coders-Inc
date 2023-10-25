class Employees {
#salary
#isHired

constructor(name, position, salary, isHired){
    this.name = name
    this.position = position
    this.#salary = salary
    this.#isHired = isHired
}

getSalary(){
    return this.#salary
}
getStatus(){
    return this.#isHired
}
setStatus(command){
    if(command == 'hire'){
        this.#isHired = true
    } else if (command == 'fire'){
       this.#isHired = false
    }
}
setSalary(amount){
    this.#salary = amount
}


//  andrwsm

    
}

module.exports = {
    Employees,
}