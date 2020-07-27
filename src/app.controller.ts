import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AppUser } from './app-users/domain/app-user.interface';
import { JwtAuthGuard } from './auth/guards/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.initMessage();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() appUser: AppUser) {
    return this.authService.login(appUser);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
