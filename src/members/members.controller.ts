import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MembersService } from './members.service';
import { Prisma } from '@prisma/client';

@Controller()
export class MembersController {
  constructor(private readonly memberService: MembersService) {}

  @Get('member/:id')
  async getMember(@Param('id') id: string) {
    console.log(id);
    return this.memberService.member({ id: parseInt(id) });
  }

  @Post('member')
  async createMember(@Body() createMemberDto: Prisma.membersCreateInput) {
    return this.memberService.createMember(createMemberDto);
  }
}
