import Video from '../models/Video';

export default interface IVideoRepository {
  read(): Promise<Video[] | undefined>;
  create(video: Omit<Video, 'id'>): Promise<Video>;
}
