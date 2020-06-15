// import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('videos')
class Video {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public title: string;

  @Column('timestamp with time zone')
  public date: Date;

  @Column()
  public code: string;

  // constructor({ title, code }: Omit<Video, 'id'>) {
  //   this.id = uuid();
  //   this.title = title;
  //   this.code = code;
  //   this.date = new Date();
  // }
}

export default Video;
