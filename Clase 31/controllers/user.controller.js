import { userRepository } from '../repository';
export class UserController {
  execute(req, res) {
    const user = userRepository.get();
    const userDTO = {
      name: `${user.name} ${user.lastname}`,
      age: user.age,
      email: user.email,
      nationality: user.nationality,
    };

    res.send(userDTO);
  }
}
