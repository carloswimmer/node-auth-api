import User from '../models/User';
import usersDB from '../mockDB/usersDB';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = usersDB;
  }

  public findById(id: string): User | undefined {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  public findByUsername(username: string): User | undefined {
    const user = this.users.find(user => user.username === username);

    return user;
  }

  public create({ username, email, password }: Omit<User, 'id'>): User {
    const user = new User(username, email, password);

    this.users.push(user);

    return user;
  }

  public findAll(): User[] {
    return this.users;
  }
}

export default UsersRepository;
