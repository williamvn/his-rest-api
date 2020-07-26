import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  initMessage(): string {
    return 'HIS API Running';
  }
}
