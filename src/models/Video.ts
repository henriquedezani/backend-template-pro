import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('videos')
class Video {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public title: string;

  @Column()
  public userId: string;

  @Column('timestamp with time zone')
  public date: Date;

  @Column()
  public code: string;
}

export default Video;
