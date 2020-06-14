export default class Video {
  public title: string;

  public date: Date;

  public code: string;

  constructor(title: string) {
    this.title = title;
    this.date = new Date();
    this.code = '123';
  }
}
