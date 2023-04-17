// Description: This file contains a helper function to send emails
// Authors: Jean Carlos Carrillo && Sebastián Gámez Ariza

// Import send grid email
import sgMail from '@sendgrid/mail';

// Import the send grid api key
import {SENDGRID_API_KEY} from '../config.js';

// Send email helper
const sendEmailHelper = async (email, subject, message) => {
    // Create a response object
    let sent = false;
    // Try to send the email
    try {
        // Set the send grid api key
        sgMail.setApiKey(SENDGRID_API_KEY);
        // Create the email object
        const emailObject = {
            to: email,
            from: 'marketmix2023.api@outlook.com',
            subject: subject,
            text: message,
        };
        // Send the email
        await sgMail.send(emailObject);
        // Set the sent variable to true
        sent = true;
    }
    // Catch the error
    catch (error) {
        // Set the sent variable to false
        sent = false;
        // Throw the error
        throw error;
    }
    // Return the response
    return sent;
}

// Export the send email helper
export default sendEmailHelper;
