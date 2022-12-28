import { PasswordHasherService } from './common/password-hasher.service';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://soumik9:GZKZ7b1aICHYfyWK@tech-moto.cy4t9.mongodb.net/recipe?retryWrites=true&w=majority'),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {  }
