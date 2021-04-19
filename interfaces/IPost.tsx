export interface IPost {
    id: number;
    title: string;
    body: string;
    comments?: any;
    router?: any; // Don't good option
}

export interface IComment {
    id: number;
    body: string;
}

export interface IPostCreate {
    title: string;
    body: string;
}
