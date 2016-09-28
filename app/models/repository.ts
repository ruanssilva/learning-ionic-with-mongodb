import { User } from './user'

export class Repository {
    id: number;
    name: string;
    full_name: string;
    owner : User;
    private : boolean;
    description: string;
    url: string;
}