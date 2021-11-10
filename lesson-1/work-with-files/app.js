const fs = require("fs/promises");

const fileOperations = async (filePath, action = "read", data = "") => {
    try {
        switch(action){
            case "read": 
                const text = await fs.readFile(filePath, "utf-8");
                console.log(text);
                return;
            case "add":
                await fs.appendFile(filePath, data);
                return;
            case "replace":
                await fs.writeFile(filePath, data);
                return;
            case "remove":
                await fs.unlink(filePath);
                return;
            default: 
                console.log("Unknown action");
        }       
    } catch (error) {
        console.log(error.message);
    }

};

const filePath = "files/file.txt";

// fileOperations(filePath);
// fileOperations(filePath, "add", "\n Идешь к женщине - возьми с собой плеть")
fileOperations(filePath, "replace", "\n Не плюйся - никто не носит золота во рту")
// fileOperations(filePath, "remove")

