const dotenv = require("dotenv")
const { env } = require("process")

dotenv.config();


const DATABASE_USERNAME = env.DATABASE_USERNAME || ""
const DATABASE_PASSWORD = env.DATABASE_PASSWORD || ""
const DATABASE_HOST = env.DATABASE_HOST || ""
const DATABASE = env.DATABASE || ""
const PORT = env.PORT || ""


module.exports = {
    DATABASE,
    DATABASE_HOST,
    DATABASE_PASSWORD,
    DATABASE_USERNAME,
    PORT
}
