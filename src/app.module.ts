import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    AuthModule, 
    UserModule,
    MongooseModule.forRoot('mongodb+srv://soumik9:GZKZ7b1aICHYfyWK@tech-moto.cy4t9.mongodb.net/recipe?retryWrites=true&w=majority'),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
