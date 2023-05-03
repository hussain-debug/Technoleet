var chatbotBtn = document.getElementById("chatbot-btn");


function chtbt(){
    showContactForm();

}

function showContactForm() {
    var contactForm = document.createElement("div");
    contactForm.id = "contact-form";
    var existingForm = document.getElementById("contact-form");
    if (existingForm) {
      return;
    }
    contactForm.style.position = "fixed";
  contactForm.style.bottom = "0";
  contactForm.style.right = "0";
    contactForm.style.width = "400px";
    contactForm.style.height = "340px";
    contactForm.style.borderRadius="20px";
    contactForm.style.backgroundColor = "#fff";
    contactForm.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    contactForm.style.transition = "0.5s";




    var form = document.createElement("form");
    form.style.padding="10px";


    // Set the form method attribute
    form.setAttribute('method', 'POST');
    
    // Set the data-netlify attribute
    form.setAttribute('data-netlify', 'true');
    form.setAttribute('onSubmit', 'submit');


    var fieldset = document.createElement("fieldset");
    fieldset.className = "form-group";
    
    var nameLabel = document.createElement("label");
    nameLabel.for = "name";
    nameLabel.innerText = "Name";
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "form-control";
    nameInput.id = "name";
    
    var emailLabel = document.createElement("label");
    emailLabel.for = "email";
    emailLabel.innerText = "Email";
    var emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.className = "form-control";
    emailInput.id = "email";
    
    var messageLabel = document.createElement("label");
    messageLabel.for = "message";
    messageLabel.innerText = "Message";
    var messageTextarea = document.createElement("textarea");
    messageTextarea.className = "form-control";
    messageTextarea.id = "message";
    messageTextarea.rows = "3";
    
    var submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className = "btn btn-info";
    submitButton.innerText = "send";
    submitButton.style.border = "none";
    submitButton.style.color = "white";
    submitButton.style.position = "relative";
    submitButton.style.top = "20px";

    submitButton.style.backgroundColor = "#17A2B8;";


    // submitButton.addEventListener("mouseover", function() {
    //   submitButton.style.backgroundColor = " #17A2B8;";
    //   submitButton.style.borderColor = "none";
    // });

    // submitButton.addEventListener("mouseout", function() {
    //   submitButton.style.backgroundColor = " #17A2B8;";
    //   submitButton.style.borderColor = "none";
    // });
    
    fieldset.appendChild(nameLabel);
    fieldset.appendChild(nameInput);
    fieldset.appendChild(emailLabel);
    fieldset.appendChild(emailInput);
    fieldset.appendChild(messageLabel);
    fieldset.appendChild(messageTextarea);
    fieldset.appendChild(submitButton);
    
    form.appendChild(fieldset);
    contactForm.appendChild(form);

    var closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.style.position = "absolute";
    closeButton.style.top = "5px";
    closeButton.style.right = "5px";
    closeButton.style.padding = "5px";
    closeButton.style.border = "none";
    closeButton.style.backgroundColor = "transparent";
    closeButton.style.cursor = "pointer";
closeButton.addEventListener("click", function() {
  document.body.removeChild(contactForm);
});

 var closeIcon = document.createElement("i");
  closeIcon.className = "fa fa-times";

  closeButton.appendChild(closeIcon);
contactForm.appendChild(closeButton);
document.body.appendChild(contactForm);

}



