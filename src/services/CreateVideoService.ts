import { injectable, inject } from 'tsyringe';
import Video from '../models/video';
import IVideoRepository from '../repositories/IVideoRepository';

interface IRequest {
  title: string
}

@injectable()
export default class CreateVideoService {
  constructor(
    @inject('VideoRepository') private repository: IVideoRepository,
  ) { }

  public async execute({ title }: IRequest): Promise<Video> {
    const video = new Video(title);
    video.date = new Date(Date.now());
    video.code = '123';

    await this.repository.create(video);

    return video;
  }
}
