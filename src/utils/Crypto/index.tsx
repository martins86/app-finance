const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const initVector = crypto.randomBytes(16);
const SecurityKey = crypto.randomBytes(36);

/**
 * Retorna random bytes
 */
export const randomBytes = (value: number) => {
  return crypto.randomBytes(value);
};

/**
 * Esperar dados para criptografar
 */
export const encryptData = (encrypt: string) => {
  const cipher = crypto.createCipheriv(algorithm, SecurityKey, initVector);
  var encrypted = cipher.update(encrypt, 'utf-8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
};

/**
 * Esperar dados para descriptografar
 */
export const decryptData = (encrypted: string) => {
  const decipher = crypto.createDecipheriv(algorithm, SecurityKey, initVector);
  var decryptedData = decipher.update(encrypted, 'hex', 'utf-8');
  decryptedData += decipher.final('utf8');

  return decryptedData;
};
