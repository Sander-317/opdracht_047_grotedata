// console.log("script is hier")
const buttonLandenLijst = document.getElementById("landen_lijst")
const buttonFindFemaleSteenbok = document.getElementById("find_female_steenbok")
const buttonGetAverageAge = document.getElementById("get_average_age")
const viewport = document.querySelector("#viewport")

buttonGetAverageAge.addEventListener("click", () => getAverageAge(randomPersonData) )
buttonLandenLijst.addEventListener("click", () => getPersonsByRegion(randomPersonData))
buttonFindFemaleSteenbok .addEventListener("click", () => getAllTheFemales(randomPersonData))

function clearTheDom() {
  viewport.innerHTML = ""
}

function getAllTheFemales(array){
  const allFemales = array.filter((item) => item.gender === "female")
  // console.log(allFemales)
  getAllTheFemalesOlderThan30(allFemales)
}

function getAllTheFemalesOlderThan30(array) {
  const femaleOlderThan30 = array.filter((item) => item.age >= 30)
  // console.log(femaleOlderThan30)
  isZodiacsignSteenbok(femaleOlderThan30)
}

function isZodiacsignSteenbok(array) {
  const isSteenbok = array.map((item) => {
   const splitBirthday = item.birthday.mdy.split("/")
   const day = splitBirthday[1]
   const month = splitBirthday[0]
   if ((month == 1 && day <= 20) || (month == 12 && day >= 22))
    return item
})
// console.log(isSteenbok)
const newArray = removeUndefinedFromArray(isSteenbok)
// console.log(newArray)
}

function removeUndefinedFromArray(array){
  const filteredArray = array.filter( (item) => {
          return  item !== undefined
  })
  // console.log(filteredArray)
  addZodiacFemaleToDom(filteredArray)
}

function addZodiacFemaleToDom(array){
  clearTheDom()
  // array.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
  array.sort((a, b) => {
    return a.name.localeCompare(b.name)
     if(a.name < b.name) {return -1}
     if (a.name > b.name) {return 1}
     return 0
  })
  array.map((item) =>{
    let newLiTag = document.createElement("li")
    let newImg = document.createElement("img")
    newLiTag.innerHTML = `voornaam: ${item.name} achternaam: ${item.surname} <br>`
    newImg.src = `${ item.photo}`
    newLiTag.appendChild(newImg)
    viewport.appendChild(newLiTag)
  })
}

function getAllAdults(array) {
   const allAdults = array.filter((item) =>item.age >= 18)
  //  console.log("ALL ADULTS",allAdults)
}

function getAverageAge(array) {
  const totalAge = array.reduce((total, item) =>{
              return total + item.age
  }, 0)
  // console.log(totalAge)
  const averageAge = Math.round(totalAge / array.length)
  addAverageAgeToDom(averageAge)
  // console.log(averageAge) 
}

function addAverageAgeToDom(item){
  clearTheDom()
  const newLi = document.createElement("li")
  newLi.innerHTML = `Er zijn ${randomPersonData.length} mensen met een gemiddelde leeftijd  van ${item} jaar oud`
  viewport.appendChild(newLi)
}

function getPersonsByRegion(array){
  clearTheDom()
  const result = array.reduce((region, person) =>{
    const country = person.region
    if (region[country] == null) region[country] = []
    region[country].push(person)
    return region
   }, [])
   addRegionAndAmountOfPeople(Object.entries(result).sort())
}

function addRegionAndAmountOfPeople(array){
 array.map((item) =>{
  const newLi = document.createElement("li")
  const key = item[0]
  const value = Object.values(item[1])
  newLi.innerHTML = ` ${key} aantal personen ${value.length} `
  viewport.appendChild(newLi)
 })
}

function makeRegionArray (array) {
  const regionArray = array.map((item) => {
    return item
  })
    addRegionArrayToDom(regionArray) 
}



