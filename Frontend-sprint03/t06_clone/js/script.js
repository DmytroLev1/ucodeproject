const planet = {
    name: 'Earth',
    location: 'Solar System',
    moons: 1,
    type: 'Terrestrial Planet'
  };

  let clone = Object.assign({}, planet);



  console.log(planet);
  // {name: "Earth", location: "Solar System", moons: 1, type: "Terrestrial Planet"}
 
  console.log(clone);
  // {name: "Earth", location: "Solar System", moons: 1, type: "Terrestrial Planet"}
  
  
  planet.name = 'PlanetThree';
  console.log(planet);
  // {name: "PlanetThree", location: "Solar System", moons: 1, type: "Terrestrial Planet"}
  console.log(clone);
  // {name: "Earth", location: "Solar System", moons: 1, type: "Terrestrial Planet"}
  
  clone.moons = 3;
  console.log(planet);
  // {name: "PlanetThree", location: "Solar System", moons: 1, type: "Terrestrial Planet"}
  console.log(clone);
  // {name: "Earth", location: "Solar System", moons: 3, type: "Terrestrial Planet"}


//   
//    const clone = {}
    // for ( let char in planet){
    //   clone[char] = planet[char]
    // }