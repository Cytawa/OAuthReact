import { authorizedApi } from "../hooks/useAxios";
import { User } from "../models/User";

export class UserApi {
  static getUser = async () => await authorizedApi.get<User>("/profile");
}
