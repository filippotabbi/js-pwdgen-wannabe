
  var name = prompt("Inserisci il tuo nome");
  var surname = prompt("Inserisci il tuo cognome");
  var favoriteColor = prompt("Inserisci il tuo colore preferito");

  var psw = name.toLowerCase() + surname + favoriteColor + Math.floor(21);

  document.getElementById("psw").innerHTML = psw;
  document.getElementById("done").innerHTML = "Password generata con successo!"
