// console.log("script is hier")
const button = document.getElementById("landenLijst")
const viewport = document.querySelector("#viewport")
button.addEventListener("click", () => addRegionArrayToDom(makeRegionArray(randomPersonData)))

// test(randomPersonData)
// console.log(randomPersonData)



// function findRegion(randomPersonData) {
//   const newArray = randomPersonData.sort((item) => item.region)
//    newArray.map((item) => {
//   const newLi = document.createElement("li")
//     newLi.innerHTML = item.region
//     viewport.appendChild(newLi)
//  })

//  console.log(newArray.sort())
// }

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

getAllTheFemales(randomPersonData)

function getAllTheFemales(array){
  const allFemales = array.filter((item) => item.gender === "female")
  console.log(allFemales)
  getAllTheFemalesOlderThan30(allFemales)
}

function getAllTheFemalesOlderThan30(array) {
  const femaleOlderThan30 = array.filter((item) => item.age >= 30)
  console.log(femaleOlderThan30)
  isZodiacsignSteenbok(femaleOlderThan30)
}

function isZodiacsignSteenbok(array) {
  const steenbokStartDate = new Date(12-22)
  const steenbokEndDate = new Date(1-19)
 const isSteenbok = array.map((item) => {
   const splitBirthday = item.birthday.mdy.split("/")
   const day = splitBirthday[1]
   const month = splitBirthday[0]
   const dayMonth = new Date(`${month}`-`${day}`)
   console.log("dit is daymonth",dayMonth)
   const steenbok = dateCheck(dayMonth, steenbokStartDate,steenbokEndDate)
   if (steenbok === true)
   console.log(steenbok)
   console.log(typeof steenbok)
   return console.log(item)
  
 })
console.log(`isSteenbok =${isSteenbok}`)
}
// (date, min, max) => (dayMonth.getTime() >= steenbokStartDate.getTime() && dayMonth.getTime() <= steenbokEndDate.getTime())
function dateCheck(date, min, max){
   if (date >= min && date <= max) 
    return true
  else return false
}