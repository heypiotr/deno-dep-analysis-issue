import { memoryUsage } from "node:process"

console.log("memory before", memoryUsage())

console.time("import")
const input = "./framer-site-bundle/script_main.EIMY2PET.mjs"
const main = await import(input)
console.timeEnd("import")

setInterval(() => console.log("memory after", memoryUsage()), 1000)
