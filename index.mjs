console.log("memory before", Deno.memoryUsage())

console.time("import")
const input = "./framer-site-bundle/script_main.EIMY2PET.mjs"
const main = await import(input)
console.timeEnd("import")

setInterval(() => console.log("memory after", Deno.memoryUsage()), 1000)
