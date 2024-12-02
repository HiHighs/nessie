import emailjs from 'emailjs-com';
import emailConfigContact from './emailKeyContact';
import emailConfigOrder from './emailKeyOrder';

export function sendContactEmail(e) {
  emailjs
    .sendForm(
      emailConfigContact.SERVICE_ID,
      emailConfigContact.TEMPLATE_ID,
      e.target,
      emailConfigContact.PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
        return true;
      },
      (error) => {
        console.error(error.text);
        return false;
      }
    );
}

export function testEmail() {
  const templateParams = {
    to_name: 'jonasje',
  };

  return emailjs.send(
    emailConfigOrder.SERVICE_ID,
    emailConfigOrder.TEMPLATE_ID,
    templateParams,
    emailConfigOrder.PUBLIC_KEY
  );
}

export function sendOrderConfirmationEmail(
  clientDetails,
  clientAddress,
  cart,
  totalAmount
) {
  const templateParams = {
    client_name: `${clientDetails.firstName} ${clientDetails.lastName}`,
    to_email: clientDetails.email,
    date: new Date().toLocaleDateString(),
    order_items: formatCart(cart),
    client_address: `${clientAddress.street}, ${clientAddress.zip} ${clientAddress.city}, ${clientAddress.country}`,
    total_amount: totalAmount,
  };

  return emailjs.send(
    emailConfigOrder.SERVICE_ID,
    emailConfigOrder.TEMPLATE_ID_CLIENT,
    templateParams,
    emailConfigOrder.PUBLIC_KEY
  );
}

export function sendAdminOrderNotification(
  clientDetails,
  clientAddress,
  cart,
  totalAmount
  // payment
) {
  const templateParams = {
    client_name: `${clientDetails.firstName} ${clientDetails.lastName}`,
    client_email: clientDetails.email,
    order_items: formatCart(cart),
    client_address: `${clientAddress.street}, ${clientAddress.zip} ${clientAddress.city}, ${clientAddress.country}`,
    total_amount: totalAmount,
    // payment_method: payment.paymentMethod,
  };
  return emailjs.send(
    emailConfigOrder.SERVICE_ID,
    emailConfigOrder.TEMPLATE_ID_ADMIN,
    templateParams,
    emailConfigOrder.PUBLIC_KEY
  );
}

function formatCart(cart) {
  let result = '';
  cart.forEach(
    (item) => (result += `${item.quantity} ${item.name} ${item.price}\n`)
  );
  return result;
}
