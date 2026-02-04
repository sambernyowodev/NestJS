import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersPramDto } from "../dtos/get-users-pram.dto";
import { AuthService } from "src/auth/providers/auth.service";

@Injectable()
export class UserService {
    constructor(
    /*
    * Injecting Auth Servicce
    */

    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService
    ){}

    public findAll(GetUsersPramDto: GetUsersPramDto, limit?: number, page?: number) {
        const isAuth = this.authService.isAuth();
        console.log(isAuth);
        
        return [
            { name: 'User1', email: 'user1@example.com'},
            { name: 'User2', email: 'user2@example.com'},
            { name: 'User3', email: 'user3@example.com'},
        ];
    }

    /*
      find a user by id
    */
    public findOneById(id: string) {
        return { 
            id: 1234,
            name: 'User1', 
            email: 'user1@example.com'
        };
    }
}