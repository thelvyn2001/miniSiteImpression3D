/* reglage tempo carousele en js
$(function () {
  $('.carousel').carousel({ interval: 2000 });
});
*/

// GESTION DES EVENEMENTS SUR LE FORMULAIRE
//**************************************** **   
//MET LES FONCTIONS DANS UN OBJET LITTERAL
//*****************************************
let check = {};
//*************************************************************
// -------------- TEST SUR LE PRENOM  -------------------------
//*************************************************************
check["firstName"] = function(){  //check["id du champs"]  le id pour recopier pour le prénom
  //création de la nouvelle balise
  let firstName    = document.getElementById("idFirstName");
  let divFirstName = document.getElementById("divFirstName");
  let spanFirstName     = document.createElement("span");
  spanFirstName.id = "spanFirstName";
  let spanFirstNameText  = document.createTextNode("Pas moins de 2 caractères")
  spanFirstName.appendChild(spanFirstNameText)

  if (firstName.value.length > 2){
    firstName.className = "form-control is-valid"; //si v4.2
      if (document.getElementById("spanFirstName")){ //on teste si la nouvelle balise existe
        let child = document.getElementById("spanFirstName"); //si elle existe on la supprime
        child.parentNode.removeChild(child);
      }
      return true; //envoie la valeur vrai
  } else {
    firstName.className = "form-control is-invalid";
      if (!document.getElementById("spanFirstName")){ //on teste si la nouvelle balise existe
        divFirstName.appendChild(spanFirstName);
        spanFirstName.style.color = "red";
      }
      return false;
  }
};
        

//*************************************************************
// -------------- TEST SUR LE NOM  -------------------------
//*************************************************************
check["lastName"] = function(){  //check["id du champs"]  le id pour recopier pour le prénom
  let lastName = document.getElementById("idLastName");
  let divLastName = document.getElementById("divLastName")
  let spanLastName = document.createElement("span");
  spanLastName.id = "spanLastName";
  let spanLastNameText  = document.createTextNode("Pas moins de 2 caractères")
  spanLastName.appendChild(spanLastNameText)

  if (lastName.value.length > 2){
    lastName.className = "form-control is-valid"; //si V4.2
    if (document.getElementById("spanLastName")){ //on teste si la nouvelle balise existe
      let child = document.getElementById("spanLastName"); //si elle existe on la supprime
      child.parentNode.removeChild(child);
    }
    return true; //envoie la valeur vrai
  } else {
    lastName.className = "form-control is-invalid"; //si 4.2
      if (!document.getElementById("spanLastName")){ //on teste si la nouvelle balise existe
        divLastName.appendChild(spanLastName);
        spanLastName.style.color = "red";
      }
    return false;
  }
};
        
//*************************************************************
// -------------- TEST SUR LE TELEPHONE  ----------------------
//*************************************************************
check["phone"] = function(){
  let phone = document.getElementById("idPhone");
  let regPhone = /([0-9]{2}){5}/
  let divPhone = document.getElementById("divPhone");
  let spanPhone = document.createElement("span");
  spanPhone.id = "spanPhone";
  var spanPhoneText = document.createTextNode("Merci de renseigner le téléphone sur 10 chiffres");
  spanPhone.appendChild(spanPhoneText);
            
  if (regPhone.test(phone.value)){
    phone.className = "form-control is-valid"; //si 4.2
    if (document.getElementById("spanPhone")){
      var child = document.getElementById("spanPhone");
      child.parentNode.removeChild(child);
    }
    return true;
  } else {
    phone.className = "form-control is-invalid"; //si 4.2
    if (!document.getElementById("spanPhone")){
      divPhone.appendChild(spanPhone);
      spanPhone.style.color = "red";
    }
    return false;
  } 
};

//*************************************************************
// -------------- TEST SUR L'ADRESSE MAIL ---------------------
//  avec test reg sur l'adresse mail
//*************************************************************
check["mail"] = function(){
  let email = document.getElementById("idEmail");
  let regMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
  let divEmail = document.getElementById("divEmail");
  let spanEmail = document.createElement("span");
  spanEmail.id = "spanEmail";
  let spanEmailText = document.createTextNode("Merci de rentrer une adresse mail valide");
  spanEmail.appendChild(spanEmailText);
            
  if (regMail.test(email.value)){
    email.className = "form-control is-valid"; //si 4.2
    if (document.getElementById("spanEmail")){
      let child = document.getElementById("spanEmail");
      child.parentNode.removeChild(child);
    }
    return true;
  } else {
    email.className = "form-control is-invalid"; //si 4.2
    if (!document.getElementById("spanEmail")){
      divEmail.appendChild(spanEmail);
      spanEmail.style.color = "red";
    }
    return false;
  } 
};

//*************************************************************
// -------------- TEST SUR LE TEXTAREA SI VIDE ----------------
//*************************************************************
check["comment"] = function(){
  let comment = document.getElementById("idComment");
  let divComment = document.getElementById("divComment");
  let spanComment = document.createElement("span");
  spanComment.id = "spanComment";
  let spanCommentText = document.createTextNode("pas moins de 10 caractères");
  spanComment.appendChild(spanCommentText);
            
  if (comment.value.length >= 10){
    comment.className = "form-control is-valid"; //si 4.2
    if (document.getElementById("spanComment")){
      let child = document.getElementById("spanComment");
      child.parentNode.removeChild(child);
    }
    return true;
  } else {
    comment.className = "form-control is-invalid"; //si 4.2
      if (!document.getElementById("spanComment")){
        divComment.appendChild(spanComment);
        spanComment.style.color = "red";
    }
    return false;
  } 
};


//***************************************************
//----------- GESTION DES EVENEMENTS ----------------
//***************************************************

btnSubmit.addEventListener("click", function(e){
  let btnSubmit = document.getElementById("btnSubmit");
  let result = true;  //par defaut c'est vrai
  for (let i in check) {      
    result = check[i](i) && result;  //check[i] envoie la fonction et (i) le résultat de la fonction
  };
//***************************************************
//----- TEST SI LA CONDITION TRUE EST REMPLIE -------
//***************************************************
  if (result) {
    alert("Le formulaire est bien rempli.");
  } else {
    e.preventDefault();  //stoppe l'envoie du formulaire
  }
});
