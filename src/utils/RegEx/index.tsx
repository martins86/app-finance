/**
 * Valida se é um email padrão ex: email@email.com.
 */
export const validateEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);

/**
 * Valida se é uma senha forte.
 */
export const validateStrongPassword = new RegExp(
  '^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$'
);
