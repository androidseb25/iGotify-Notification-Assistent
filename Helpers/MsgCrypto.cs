using System.Security.Cryptography;
using System.Text;

namespace iGotify_Notification_Assist.Helpers;

public class MsgCrypto
{
    private string _publicKey { get; set; }
    private string _msg { get; set; }
    public MsgCrypto(string publicKey, string msg)
    {
        _publicKey = publicKey;
        _msg = msg;
    }

    /// <summary>
    /// Encrypting the cleared text with the public key that was passed in the constructor
    /// </summary>
    /// <returns></returns>
    public string Encrypt()
    {
        // Convert the text to an array of bytes   
        byte[] dataToEncrypt = Encoding.UTF8.GetBytes(_msg);

        // Create a byte array to store the encrypted data in it   
        byte[] encryptedData;
        using (RSACryptoServiceProvider rsa = new RSACryptoServiceProvider())
        {
            // Set the rsa pulic key  
            byte[] publicKeyBytes = Convert.FromBase64String(_publicKey);
            rsa.ImportRSAPublicKey(publicKeyBytes, out _);

            // Encrypt the data and store it in the encyptedData Array   
            encryptedData = rsa.Encrypt(dataToEncrypt, RSAEncryptionPadding.Pkcs1);
        }
        
        return Convert.ToBase64String(encryptedData);
    }
}