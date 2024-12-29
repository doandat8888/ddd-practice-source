/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { GraphQLModule } from './presentation/graphql/graphql.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [
    InfrastructureModule,
    GraphQLModule,
    ApplicationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
