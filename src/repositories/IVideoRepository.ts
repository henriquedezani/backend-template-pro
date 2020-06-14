import Video from '../models/Video';

export default interface IVideoRepository {
  read(): Promise<Video[]>;
  create(video: Video): Promise<void>;
}
