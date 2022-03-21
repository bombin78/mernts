export interface ILink {
    _id: number
    clicks: number
    from: string
    to: string
    date: string,
}

export interface IAuthContext {
    token: string | null,
    userId: number | null,
    login: (jwtToken: string, id: number) => void,
    logout: () => void,
    isAuthenticated: boolean,
}