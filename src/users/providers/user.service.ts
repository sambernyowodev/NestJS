import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersPramDto } from '../dtos/get-users-pram.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UserService {
  /**
   * The method to injection AuthService
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * The method to get all the users from the database
   */
  public findAll(
    GetUsersPramDto: GetUsersPramDto,
    limit?: number,
    page?: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);

    return [
      { name: 'User1', email: 'user1@example.com' },
      { name: 'User2', email: 'user2@example.com' },
      { name: 'User3', email: 'user3@example.com' },
    ];
  }

  /**
   * Find a single user using the ID of the user
   */
  public findOneById(id: string) {
    return {
      id: 1234,
      name: 'User1',
      email: 'user1@example.com',
    };
  }
}
