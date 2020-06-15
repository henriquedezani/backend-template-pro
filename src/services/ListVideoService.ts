import { injectable, inject } from 'tsyringe';
import Video from '../models/Video';
import IVideoRepository from '../repositories/IVideoRepository';

@injectable()
export default class ListVideoService {
  constructor(
    @inject('VideoRepository') private repository: IVideoRepository,
  ) { }

  public async execute(): Promise<Video[] | undefined> {
    try {
      const videos = this.repository.read();
      return videos;
    } catch (error) {
      throw Error(error);
    }
  }
}
