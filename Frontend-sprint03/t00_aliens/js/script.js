let a = prompt('pleas your name', '');
let b = prompt('pleas name leader', '');
let c = prompt('resources that the aliens have', 'the names resourse  by a comma');
let d = prompt('what are the goals and ideas of the aliens', '');

const alienSpecies = {
    name: a,
    leader: b,
    resources: c,
    resourcesCount: c.split(','),
    agenda: d,
    isHostile: true,
}
alert('Here\'s the alien species:' + '\n' + 'name' + '-' +
alienSpecies.name + '\n' + 'leader' + '-' +
alienSpecies.leader + '\n' + 'resources' + '-' + 
alienSpecies.resources + '\n' + 'resourcesCount' + '-' + 
alienSpecies.resourcesCount.length + '\n' + 'agenda' + '-' +
alienSpecies.agenda  + '\n' + 'isHostile' + '-' +
alienSpecies.isHostile)