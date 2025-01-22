import { Notification,
        PushNotification,
        EmailNotification,
        SMSNotification } 
        from "./notification.interface";



//AMAZON Simple Email Service Instance
const ses: any = {};

export class NotificationService {
              badsendEmail(notification: EmailNotification) {
              const params = {
                Source: 'no-reply@coderone.io',
                Destination: {
                  ToAddresses: [notification.to],
                },
                Message: {
                  Subject: {
                    Data: notification.subject,
                  },
                  Body: {
                    Text: {
                      Data: notification.body,
                    },
                  },
                },
              };
          
               ses.sendEmail(params);
            }
            badSendSMS(notification: Notification) {
              // Logic to send SMS notification
            }
          
            badSendPushNotification(notification: Notification) {
              // Logic to send push notification
            }
          
            sendEmail(notification: EmailNotification) {
              // Logic to send email notification
            }
          
            sendSMS(notification: SMSNotification): void {
              // Logic to send SMS notification
            }
          
            sendPushNotification(notification: PushNotification): void {
              // Logic to send push notification
            }
          }