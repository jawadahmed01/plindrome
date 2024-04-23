const input = document.querySelector("#inputData")
const btn = document.querySelector("#btn")
const showmsg = document.querySelector("#showmsg")

btn.addEventListener("click", () => {
  const inputdata = input.value
  const length = inputdata.length
  let msg = "It is a Plindrome"
  for (let i = 0; i < length / 2; i++) {
    if (inputdata[i] != inputdata[length - 1 - i]) {
      msg = "It is not a Plindrome"
    }
  }
  showmsg.textContent = `${inputdata} : ${msg}`
})
