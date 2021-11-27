const jwt = require("jsonwebtoken");

const SECRET_KEY = "ghgsfhdsgdsf";

const payload = {
    id: "61a11f05b5f383b0baa0fae0"
}

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token)

const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    // const result = jwt.verify(token, SECRET_KEY);
    // console.log(result)
    const wrongToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTExZjA1YjVmMzgzYjBiYWEwZmFlMCIsImlhdCI6MTYzNzk0OTkyMSwiZXhwIjoxNjM3OTUzNTIxfQ.pCOcrDBILJYRIK25qRVJXHjil73loAeArw7GGAXBti1"
    const result2 = jwt.verify(wrongToken, SECRET_KEY)
} catch (error) {
    console.log(error.message)
}
