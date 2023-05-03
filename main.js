var chatbotBtn = document.getElementById("chatbot-btn");


function chtbt(){
    showContactForm();
    chatbotBtn.style.display="none"

}

function showContactForm() {
    var contactForm = document.createElement("div");

    var form=document.getElementById("form")
    contactForm.id = "contact-form";
    // var existingForm = document.getElementById("contact-form");
    // if (existingForm) {
    //   return;
    // }
    contactForm.style.position = "fixed";
  contactForm.style.bottom = "0";
  contactForm.style.right = "0";
    contactForm.style.width = "400px";
    contactForm.style.height = "355px";
    contactForm.style.borderRadius="20px";
    contactForm.style.backgroundColor = "#fff";
    contactForm.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    contactForm.style.transition = "0.5s";

form.style.display="block";
form.style.padding="10px";

   
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
  contactForm.style.display="none";
  chatbotBtn.style.display="block"
  

});
 
 var closeIcon = document.createElement("i");
  closeIcon.className = "fa fa-times";

  closeButton.appendChild(closeIcon);
contactForm.appendChild(closeButton);
document.body.appendChild(contactForm);

}



