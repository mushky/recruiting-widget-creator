import { join } from 'path';
import fs from 'fs';

export default class FileDb {
  constructor(filename) {
    this.filePath = join(process.env.INIT_CWD, filename);
  }

  read() {
    try {
      const rawData = fs.readFileSync(this.filePath);
      return JSON.parse(rawData || '[]');
    } catch (err) {
      return [];
    }
  }

  write(data) {
    return fs.writeFileSync(this.filePath, JSON.stringify(data));
  }
}
