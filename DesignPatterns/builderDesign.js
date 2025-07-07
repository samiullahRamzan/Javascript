function Person(name,weight,height,gender) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
}

// seperate the object represntation from the object creation
// this is the builder pattern
function PersonBuilder(name,gender) {
    this.name = name;   
    this.gender =gender;
    this.setWeight = function(weight) {
        this.weight = weight;
        return this;
    }
    this.setHeight = function(height) {
        this.height = height;
        return this;
    }

    this.build = function() {
        return new Person(this.name, this.weight, this.height, this.gender);
    }

}

 
// confusion in weight and height when we see it after long time ... when we see consturctor then we know oh yes this is weight and height.. 
// const patrick=new Person("Patrick", 70, 180,'male');

const patrick = new PersonBuilder("Patrick",'male').setHeight(180).setWeight(70).build();
console.log(patrick);