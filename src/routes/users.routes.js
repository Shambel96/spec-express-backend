import express from 'express'
import {createUser, updateUser, findAllUsers, findUserById, deleteUser} from '../controllers/users.controllers.js'

const router = express.Router();


router.post("/", createUser);
router.put("/:id", updateUser)
router.get("/", findAllUsers)
router.get("/:id", findUserById)
router.delete("/:id", deleteUser)


export default router;