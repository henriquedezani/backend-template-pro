import { injectable, inject } from 'tsyringe';
// import { getCustomRepository } from 'typeorm';
import Video from '../models/Video';
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
    try {
      // const _repository = getCustomRepository<VideoRepository>(this.repository);

      // const video = this.repository.create({
      //   title,
      //   userId: '123',
      //   date: new Date(Date.now()),
      //   code: '321',
      // });

      return await this.repository.create({
        title,
        userId: '123',
        date: new Date(Date.now()),
        code: '321ds',
      });
    } catch (error) {
      throw Error(error);
    }
  }
}
