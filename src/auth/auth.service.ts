import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MembersService } from 'src/members/members.service';

//TODO: 패스워드 암호화 필요
@Injectable()
export class AuthService {
  constructor(
    private memberService: MembersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(uid: string, password: string): Promise<any> {
    const user = await this.memberService.member({ uid: uid });
    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(uid: string, password: string) {
    const userValidated = await this.validateUser(uid, password);
    if (!userValidated) {
      throw new Error('User not found');
    }

    const payload = {
      id: userValidated.id,
      uid: userValidated.uid,
      name: userValidated.name,
      createdAt: userValidated.createdAt,
      updatedAt: userValidated.updatedAt,
      lastLogin: userValidated.lastLogin,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
