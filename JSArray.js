const items = [
{nimi:'kuvar', hind: 200, kogus:5},  // rida = item
{nimi:'klaver', hind: 30, kogus:3},
{nimi:'hiir', hind:14, kogus:12},
{nimi:'pc', hind:17, kogus:1},
]

console.log(items)
let avalehtArray = document.getElementById("items");
//avalehtArray.innerHTML = "Arrei nimekiri "+ items.toString();
//document.getElementById("id2").innerHTML =items.toString();

//Filter
const filterItems = items.filter((items)=>{ // filter() method creates a new array with all elements that pass the test implemented by the provided function.
    return items.hind <=31
})
console.log(filterItems)
console.log(items)
//map
const filterNimi =items.map((items) => { //map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    return items.nimi
})
console.log(filterNimi)
let uusId1 = document.getElementById('id');
uusId1.innerHTML = "filter Array nimi:  " + filterNimi;

const filterHind =items.map((items) => { 
    return items.hind
})
let uusId2 = document.getElementById('id2');
uusId2.innerHTML = "filter Array hinnad.   " + filterHind + " ühikut";

const filterKogus =items.map((items) => { 
    return items.kogus
})
let uusId3 = document.getElementById('id3');
uusId3.innerHTML = "filter Arry kogus: " + filterKogus + " ühikut";


//find
const leiaNimi = items.find((items)=> { // Leiab array-st täpse vaste
return items.nimi ==='pc'
})
console.log(leiaNimi)
//forEach
items.forEach((item) => { // forEach() method executes a provided function once for each array element.
    console.log(item.kogus)

})
//some
const hindAlla100 = items.some((items) => { // some() method tests whether at least one element in the array passes the test
    return items.hind <= 100  //  NB! item, items

})
console.log(hindAlla100)
//every
const kogusAlla100 = items.every((items) => { // every() method tests whether all elements in the array pass the test implemented by the provided function
    return items.kogus <= 11 // NB! item,items
})
console.log(kogusAlla100)  // kirjuta õige const


//reduce
const kokku = items.reduce((total, item) => {   //total, item järjekord tähtis
    return item.hind + total  // liidab total väärtusele hinna ja tagastab uue totali. nii kunik sjada jätkub
}, 0)  // number näitab, mis summast alustatakse liitmist
console.log(kokku)
let uusId4 = document.getElementById('id4');
uusId4.innerHTML = "reduce matemaatika tulemus. Hindade summa " + kokku + " ühikut";

//includes
const rida= [1,2,3,4]
const sisaldabKaks = rida.includes(4)  // includes() method determines whether an array includes a certain value among its. true false
console.log(sisaldabKaks)
