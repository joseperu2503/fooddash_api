import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OptionalAuthGuard } from '../guards/optional-auth.guard';

export function Auth(optional = false) {
  const guard = optional ? OptionalAuthGuard : AuthGuard();
  return applyDecorators(UseGuards(guard));
}
