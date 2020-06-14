import { injectable, inject } from 'tsyringe';
import Video from '../models/video';
import IVideoRepository from '../repositories/IVideoRepository';

@injectable()
export default class ListVideoService {
  constructor(
    @inject('VideoRepository') private repository: IVideoRepository,
  ) { }

  public async execute(): Promise<Video[]> {
    const videos = this.repository.read();
    return videos;
  }
}
