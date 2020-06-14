import Router from 'express';
import VideoController from '../controllers/VideoController';

const routes = Router();

const videoController = new VideoController();

routes.get('/', videoController.read);
routes.get('/create', videoController.create);

export default routes;
