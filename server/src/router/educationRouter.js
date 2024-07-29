const {Router}= require("express")
const educationRouter= Router()

const postEducationHandler= require ("../handlers/education/postEducationHandler")

educationRouter.post("/", postEducationHandler)

module.exports= educationRouter