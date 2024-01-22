import * as CryptoJS from "crypto-js";

export function decryptPassword(password: string) {
    const bytes = CryptoJS.AES.decrypt(password, "mdpSecretPass");
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    return originalPassword;
}

export function encryptPassword(password: string) {
    return CryptoJS.AES.encrypt(password, 'mdpSecretPass').toString();
}