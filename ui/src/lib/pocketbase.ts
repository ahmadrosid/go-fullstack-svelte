import PocketBase from "pocketbase";

export const pb = new PocketBase('http://localhost:8090');

export type UserModel = {
    id: string;
    username: string;
    email: string;
}
