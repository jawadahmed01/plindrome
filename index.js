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

// Min Max

function findMissingNumber(numbers) {
  numbers.sort((a, b) => a - b)
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] !== 1) {
      return numbers[i] + 1
    }
  }
  return null
}

console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20]))
console.log(findMissingNumber([1, 2, 3, 4, 5, 7]))
console.log(findMissingNumber([10, 11, 12, 14, 15]))

// Missing Number

function findMissingNumber(numbers) {
  numbers.sort((a, b) => a - b)
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] !== 1) {
      return numbers[i] + 1
    }
  }
  return null
}

console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20]))
console.log(findMissingNumber([1, 2, 3, 4, 5, 7]))
console.log(findMissingNumber([10, 11, 12, 14, 15]))
