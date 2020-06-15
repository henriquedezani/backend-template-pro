import { getRepository, Repository } from 'typeorm';
import IVideoRepository from './IVideoRepository';
import Video from '../models/Video';

class VideoRepository implements IVideoRepository {
  private _repository: Repository<Video>;

  constructor() {
    this._repository = getRepository(Video);
  }

  public async read(): Promise<Video[]> {
    return this._repository.find();
  }

  public async create(video: Video): Promise<Video> {
    return this._repository.save(video);
  }
}

export default VideoRepository;

// import { EntityRepository, Repository } from 'typeorm';
// import IVideoRepository from './IVideoRepository';
// import Video from '../models/Video';

// @EntityRepository(Video)
// class VideoRepository extends Repository<Video> implements IVideoRepository {
//   public async read(): Promise<Video[] | undefined> {
//     const videos = this.find();
//     return videos;
//   }

//   // public async create(video: Video): Promise<void> {
//   //   this.create(video);
//   // }
// }

// export default VideoRepository;
