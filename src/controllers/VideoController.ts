import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateVideoService from '../services/CreateVideoService';
import ListVideoService from '../services/ListVideoService';

export default class VideoController {
  public async read(request: Request, response: Response): Promise<Response> {
    const videos = await container.resolve(ListVideoService).execute();
    return response.json(videos);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;
    const video = await container.resolve(CreateVideoService).execute({ title });
    return response.json(video);
  }
}
