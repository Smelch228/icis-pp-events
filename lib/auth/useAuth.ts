import { useMemo } from 'react';

interface IAuthUser{
    userId: number;
    username: string;
    lastname: string;
}

const useAuth: () => IAuthUser = () => useMemo(()=>({userId: 1, username: 'BRAD', lastname:'PITT'}),[]);

export default useAuth;
