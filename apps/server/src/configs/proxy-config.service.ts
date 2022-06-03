import { ProxyModuleOptions, ProxyModuleOptionsFactory } from '@finastra/nestjs-proxy';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProxyConfigService implements ProxyModuleOptionsFactory {
  readonly logger = new Logger(ProxyConfigService.name);

  constructor(private configService: ConfigService) {}

  createModuleConfig(): ProxyModuleOptions {
    const services = [
      {
        id: 'NODE_RED_URL',
        url: this.configService.get('NODE_RED_URL'),
      },
    ];

    this.logger.log(services);

    return {
      services,
    };
  }
}
