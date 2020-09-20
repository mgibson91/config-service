import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import { SetValueDto } from './types';

const CONFIG_FILE = 'config.json';

@Injectable()
export class AppService {
  // Get config object
  get(): unknown {
    if (fs.existsSync(CONFIG_FILE)) {
      const text = fs.readFileSync(CONFIG_FILE, 'utf8');
      const config = JSON.parse(text);

      return config;
    }

    return {};
  }

  // Merges with existing data
  set(data: SetValueDto): void {
    let config = {};
    if (fs.existsSync(CONFIG_FILE)) {
      const text = fs.readFileSync(CONFIG_FILE, 'utf8');
      config = JSON.parse(text);
    }

    config = Object.assign(config, data);

    const text = JSON.stringify(config);
    fs.writeFileSync(CONFIG_FILE, text);
  }

  // Resets config
  reset(data?: SetValueDto): void {
    const config = data || {};
    const text = JSON.stringify(config);
    fs.writeFileSync(CONFIG_FILE, text);
  }
}
