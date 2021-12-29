import SibApiV3Sdk from 'sib-api-v3-sdk';
import { IEmail, IProviderConfig } from '../@types/types';

export async function sendWithSendingBlue(
    config: IProviderConfig,
    email: IEmail,
) {
    const { sender, apiKey } = config;
    const { subject, body, reciever, recievers } = email;
    const defaultClient = SibApiV3Sdk.ApiClient.instance;

    const apiKeyFromSetings = defaultClient.authentications['api-key'];
    apiKeyFromSetings.apiKey = apiKey;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = '{{params.parameter}}, {{params.subject}}';
    sendSmtpEmail.htmlContent = body;
    sendSmtpEmail.sender = {
        name: sender.name,
        email: sender.email,
    };
    sendSmtpEmail.to = [{ email: reciever?.email, name: reciever?.name }];
    if (recievers) {
        sendSmtpEmail.bcc = recievers;
    }
    sendSmtpEmail.replyTo = {
        email: sender.email,
        name: sender.name,
    };
    sendSmtpEmail.headers = { 'Message-id': new Date().toDateString() };
    sendSmtpEmail.params = { parameter: sender.name + ' ', subject: subject };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
        function (data: any) {
            console.log(
                'API called successfully. Returned data: ' +
                    JSON.stringify(data),
            );
        },
        function (error: any) {
            console.error(error);
        },
    );
}
