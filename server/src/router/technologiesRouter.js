const { Router } = require("express");
const technologiesRouter = Router();

const postTechnologiesHandler = require("../handlers/technologies/postTechnologiesHandler");

technologiesRouter.post("/", postTechnologiesHandler);

module.exports = technologiesRouter;
