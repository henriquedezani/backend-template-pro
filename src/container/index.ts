import { container } from 'tsyringe';

import IVideoRepository from '../repositories/IVideoRepository';
import VideoRepository from '../repositories/VideoRepository';

container.registerSingleton<IVideoRepository>('VideoRepository', VideoRepository);
