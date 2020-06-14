import IVideoRepository from './IVideoRepository';
import Video from '../models/Video';

export default class VideoRepository implements IVideoRepository {
  private videos: Video[] = [];

  public async read(): Promise<Video[]> {
    return this.videos;
  }

  public async create(video: Video): Promise<void> {
    this.videos.push(video);
  }
}
