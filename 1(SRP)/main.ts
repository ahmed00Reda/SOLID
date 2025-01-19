// User class handles user data
class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    getUserInfo(): string {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}

// AuthService class handles user authentication
class AuthService {
    users: User[];

    constructor() {
        this.users = [];
    }

    register(user: User): void {
        this.users.push(user);
        console.log(`${user.name} has been registered.`);
    }

    login(email: string): void {
        const user = this.users.find(user => user.email === email);
        if (user) {
            console.log(`${user.name} has logged in.`);
        } else {
            console.log('User not found.');
        }
    }
}

// Example usage
const user1 = new User('ahmed', 'ahmed@example.com');
const authService = new AuthService();

authService.register(user1);
authService.login('ahmed@example.com');