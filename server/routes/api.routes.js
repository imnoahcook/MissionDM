import express from 'express';
import setupUserRoutes from './users.routes';

const router = express.Router();

setupUserRoutes(router);

module.exports = router;
