const { Router } = require("express");
const projectsRouter = Router();

const postProjectsHandler = require("../handlers/projects/postProjectsHandler");

projectsRouter.post("/", postProjectsHandler);

module.exports = projectsRouter;
