import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateVideoService from '../services/CreateVideoService';
import ListVideoService from '../services/ListVideoService';

export default class VideoController {
  public async read(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(ListVideoService);
    const videos = await service.execute();
    return response.json(videos);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(CreateVideoService);
    const video = await service.execute({ title: 'title 1' });
    return response.json(video);
  }
}
