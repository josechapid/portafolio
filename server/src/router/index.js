const { Router } = require("express");

const router = Router();

const technologiesRouter = require("./technologiesRouter")
const educationRouter = require("./educationRouter")
const projectsRouter= require("./projectsRouter")

router.use("/technologies", technologiesRouter)
router.use("/education", educationRouter)
router.use("/projects", projectsRouter)

module.exports= router