export interface Authenticate {
    username: string;
    password: string;
}

export interface User {
    encryptedToken: string;
    statusMessage: string;
}