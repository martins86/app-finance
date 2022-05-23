import enCrypt from 'crypto';

const algorithm = 'aes-256-cbc';
const initVector = enCrypt.randomBytes(16);
const SecurityKey = enCrypt.randomBytes(32);

/**
 * Retorna random bytes
 */
export function randomBytes(value: number) {
  return enCrypt.randomBytes(value);
}

/**
 * Esperar dados para criptografar
 */
export function encryptData(encrypt: string) {
  const cipher = enCrypt.createCipheriv(algorithm, SecurityKey, initVector);
  var encrypted = cipher.update(encrypt, 'utf-8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
}

/**
 * Esperar dados para descriptografar
 */
export function decryptData(encrypted: string) {
  const decipher = enCrypt.createDecipheriv(algorithm, SecurityKey, initVector);
  var decryptedData = decipher.update(encrypted, 'hex', 'utf-8');
  decryptedData += decipher.final('utf8');

  return decryptedData;
}
