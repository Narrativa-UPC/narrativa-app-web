import { Category } from './category.model';
import { User } from "./user.model";

export interface Video{
    id: number;
    title: string;
    isbn: string;
    creator: User;
    category: Category;
    publicacionDate: Date;
    summary: string;
}