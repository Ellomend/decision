import { Module } from '@nestjs/common';
import { DecisionModule } from './decision/decision.module';

@Module({
  imports: [DecisionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
