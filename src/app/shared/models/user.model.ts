export interface User{
    id: number;
    firstname: string;
    email: string;
    password: string;
    role: 'USER' | 'CREATOR';
}