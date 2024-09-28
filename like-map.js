// map-->kono ekta kaj kore result ta ekta array er moddhe rekhe return kore

//map
const ages = [24, 34, 56, 64, 79];
const lessFour = ages.map(n => n - 4);
console.log(lessFour);
//output:[ 20, 30, 52, 60, 75 ]

//forEach --> kono ekta kaj kore result ta ekta array er moddhe rekhe return kore na

//forEach
const heights = [155, 158, 168, 170, 165];
const addHeights = heights.forEach(cm => cm + 10);
console.log(addHeights);
//output:undefined

//filter --> kono ekta conditions er upor vitti kore je value gulo pawa jai segulo niye ekta array declare kore

const playersHeight = [67, 70, 59, 75, 64];
const selected = playersHeight.filter(p => p > 65);
console.log(selected);
//output:[ 67, 70, 75 ] 

const playersAges = [67, 70, 59, 75, 64];
const selected2 = playersHeight.filter(p => p%2 === 0);
console.log(selected2);
//output:[ 70, 64 ]

//find--> eti condition mene je value gulo ashe ,segulor prothom ta ke return kore

const numbs = [2, 4, 5, 8, 10];
const selected3 = numbs.find(n => n>7);
console.log(selected3);
//output: 8