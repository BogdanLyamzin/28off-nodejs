const fs = require("fs/promises");
// const fs = require("fs").promises;

const readFile = async(filePath)=> {
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data)
    // const newData = `${data}\nНо приходится пить водку`;
    // await fs.writeFile(filePath, newData)
}

readFile("files/read.txt")

// fs.readFile("files/read.txt", "utf-8")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))