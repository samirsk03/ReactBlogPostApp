import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectID);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // call another function
       return await this.login({ email, password });
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async logout(){
    try {
        return await this.account.deleteSessions()
    } catch (error) {
        throw error
    }
  }
}

const authService = new AuthService();

export default authService;
