/**
 * Valida se é um email padrão ex: email@email.com.
 */
const regFormatEmail = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$';
export const validateEmail = new RegExp(regFormatEmail);

/**
 * Valida se é uma senha forte.
 */
const regStrongPw = '^(?=.*?[A-Za-z])(?=.*?\\d).{6,}$';
export const validateStrongPassword = new RegExp(regStrongPw);
