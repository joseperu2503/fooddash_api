import { Command, CommandRunner } from 'nest-commander';
import { SeedService } from './seed.service';

@Command({ name: 'seed', description: 'Run seed data' })
export class SeedCommand extends CommandRunner {
  constructor(private readonly seedService: SeedService) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    await this.seedService.runSeed();
    console.log('Seed executed successfully');
  }
}
