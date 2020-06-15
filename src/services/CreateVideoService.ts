import { injectable, inject } from 'tsyringe';
import IVideoRepository from '../repositories/IVideoRepository';
import Video from '../models/Video';

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
