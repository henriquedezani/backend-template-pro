import Router from 'express';
import VideoController from '../controllers/VideoController';

const routes = Router();

const videoController = new VideoController();

routes.get('/video', videoController.read);
routes.post('/video', videoController.create);

export default routes;
