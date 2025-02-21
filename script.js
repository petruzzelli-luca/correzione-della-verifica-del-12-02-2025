var canzone1 = {
  Titolo: "AFTER HOURS",
  Artista: "The Weeknd",
  Data_di_uscita: "20 Marzo 2020",
  Immagine_del_disco: "immagini/after hours_album.jpg",
  Informazioni: "L'album 'After Hours' segna un ritorno al sound più melodico di The Weeknd, esplorando temi di solitudine e rimpianto. 'Blinding Lights' è uno dei brani più iconici.",
  Audio_della_canzone: "mp3/The Weeknd After Hours.mp3",
  Link: "https://www.youtube.com/embed/ygTZZpVkmKg"
};

var canzone2 = {
  Titolo: "SORRY",
  Artista: "Justin Bieber",
  Data_di_uscita: "9 ottobre 2015",
  Immagine_del_disco: "immagini/Justin_Bieber_Sorry.png",
  Informazioni: "Una canzone di Justin Bieber, pubblicata nel 2015, che esplora temi di scuse, rimpianto e relazioni complicate. È diventato un successo mondiale con il suo ritmo accattivante.",
  Audio_della_canzone: "mp3/Justin Bieber Sorry.mp3",
  Link: "https://www.youtube.com/embed/fRh_vgS2dFE"
};

var canzone3 = {
  Titolo: "BOSS",
  Artista: "Tony Effe",
  Data_di_uscita: "2020",
  Immagine_del_disco: "immagini/tonyff_boss.jpg",
  Informazioni: "‘BOSS’ è un singolo di Tony Effe che esplora la vita da 'boss' e il successo personale. Il brano è caratterizzato da un beat energico e un testo che racconta la sua esperienza nel mondo musicale.",
  Audio_della_canzone: "mp3/Tony Effe BOSS.mp3",
  Link: "https://www.youtube.com/embed/3cn6wQaLkeQ"
};


  
  
  function play_audio1() {
    document.getElementById('play_audio1').src = canzone1.Audio_della_canzone;
    document.getElementById('play_audio1').play();
}


function play_audio2() {
  document.getElementById('play_audio2').src = canzone2.Audio_della_canzone;
  document.getElementById('play_audio2').play();
}

function play_audio3() {
  document.getElementById('play_audio3').src = canzone3.Audio_della_canzone;
  document.getElementById('play_audio3').play();
}


function info1(){
  const infoElement = document.getElementById("info1");
  if (infoElement.innerHTML === "") {
      infoElement.innerHTML = `INFO: ${canzone1.Informazioni}`;
  } else {
      infoElement.innerHTML = "";
  }
}

function info2(){
  const infoElement = document.getElementById("info2");
  if (infoElement.innerHTML === "") {
      infoElement.innerHTML = `INFO: ${canzone2.Informazioni}`;
  } else {
      infoElement.innerHTML = "";
  }
}

function info3(){
  const infoElement = document.getElementById("info3");
  if (infoElement.innerHTML === "") {
      infoElement.innerHTML = `INFO: ${canzone3.Informazioni}`;
  } else {
      infoElement.innerHTML = "";
  }
}



  function caricamento_pagina(){
    document.getElementById("titolo1").innerHTML = canzone1.Titolo;
    document.getElementById("titolo2").innerHTML = canzone2.Titolo;
    document.getElementById("titolo3").innerHTML = canzone3.Titolo;

    document.getElementById("img1").src = canzone1.Immagine_del_disco;
    document.getElementById("img2").src = canzone2.Immagine_del_disco;
    document.getElementById("img3").src = canzone3.Immagine_del_disco;

    document.getElementById("Link1").src = canzone1.Link;
    document.getElementById("Link2").src = canzone2.Link;
    document.getElementById("Link3").src = canzone3.Link;
}



