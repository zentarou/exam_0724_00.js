var animals = [] ;
for(var i = 0; i < 10; i++) {
    if(Math.random() > 0.5) {
        animals.push('fox');
    }else{
         animals.push('dog');
    }
}
  animals = animals.join(',');
  console.log(animals);

while(animals.includes("fox")) {

    animals=animals.replace("fox","die");
}
console.log(animals);