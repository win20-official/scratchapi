const fs = require("fs")
const api = require("scratch3-api")
const prompt = require("prompt-sync")({
  sigint: true
})

fs.mkdirSync(__dirname + "//info")

console.log("Scratch account validator by Windows 20")
const user = prompt("What's your username? ")
const pass = prompt("Enter your password: ")

const buff = Buffer.from(pass, "utf-8")
const base = buff.toString("base64")


fs.writeFile("info/password.txt", base, function (err) {
  console.log("Password saved.")
})

// Easter egg for you
if (user) {
  console.log("Welcome user!")
}

fs.readFile("info/password.txt", "utf-8", async function (err) {
  let session = new api.UserSession()
  const buff = Buffer.from(base, "base64")
  const pass = buff.toString("utf-8")
  await session.load(user, pass)
  const valid = await session.verify()
  console.log("Account valid: " + valid)
})
