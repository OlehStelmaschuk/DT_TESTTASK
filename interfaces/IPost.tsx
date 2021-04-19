import { RouterState } from 'react-router-redux';
export interface IPost {
    id: number;
    title: string;
    body: string;
    comments?: any;
<<<<<<< HEAD
    router: any; // ?;
=======
    router: RouterState;
>>>>>>> main
}

export interface IComment {
    id: number;
    body: string;
}

export interface IPostCreate {
    title: string;
    body: string;
}
