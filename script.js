// console.log("script is hier")
const buttonLandenLijst = document.getElementById("landenLijst")
const buttonFindFemaleSteenbok = document.getElementById("find-female-steenbok")
const viewport = document.querySelector("#viewport")
buttonLandenLijst.addEventListener("click", () => addRegionArrayToDom(makeRegionArray(randomPersonData)))
buttonFindFemaleSteenbok .addEventListener("click", () => getAllTheFemales(randomPersonData))

function clearTheDom() {
  viewport.innerHTML = ""
}

function makeRegionArray (array) {
  const regionArray = array.map((item) => {
    return item.region
  })
    return regionArray.sort() 
}

function addRegionArrayToDom(array){
  clearTheDom()
  array.map((item) => {
    const newLi = document.createElement("li")
    newLi.innerHTML = item
    viewport.appendChild(newLi)
  })

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

// addZodiacFemaleToDom(randomPersonData)
getAllAdults(randomPersonData)

function getAllAdults(array) {
   const allAdults = array.filter((item) =>item.age >= 18)
   console.log(allAdults)
}