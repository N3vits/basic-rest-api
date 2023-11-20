import express from 'express'
import { deleteUser, getUser, patchUser, postUser, putUser } from '../controller/user.controller.js';
export const router = express.Router();

router.get('/', getUser);

router.put('/', putUser);

router.post('/', postUser);

router.delete('/', deleteUser);

router.patch('/', patchUser);


