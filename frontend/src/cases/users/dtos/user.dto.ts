export interface UserDTO {
    id?: string;
    name: string;
    email: string;
    supabaseId: string;
    hasMFA: string;

    factorId: string;
    isMFAValidated?: boolean;
    isFirtsMFAAccess?: boolean;
}