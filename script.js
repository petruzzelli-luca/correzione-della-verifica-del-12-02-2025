var canzone1 = {
    Titolo: "AFTER HOURS",
    Immagine_del_disco : "immagini/after hours_album.jpg",
    Informazioni:  "babababababababababababa",
    Audio_della_canzone: "mp3/The Weeknd After Hours.mp3",
    Link:  "https://www.youtube.com/watch?v=pkjzbSA-Gac"
};
  

var canzone2 = {
    Titolo: "SORRY",
    Immagine_del_disco: "immagini/Justin_Bieber_Sorry.png", 
    Informazioni: "Una canzone di Justin Bieber, pubblicata nel 2015. Parla di scuse e rimpianto.",
    Audio_della_canzone: "mp3/Justin Bieber Sorry.mp3", 
    Link: "https://www.youtube.com/watch?v=fRh_vgS2dFE"  
  };
  
  var canzone3 = {
    Titolo: "BOSS",
    Immagine_del_disco: "immagini/tonyff_boss.jpg", 
    Informazioni: "bababababab.",
    Audio_della_canzone: "mp3/Tony Effe BOSS.mp3", 
    Link: "https://www.youtube.com/watch?v=pkjzbSA-Gac"
  };

  
  
  function play_audio1() {
    document.getElementById('play_audio1').src = canzone1.Audio_della_canzone;
    document.getElementById('play_audio1').play();
    document.getElementById("stop1").disabled = false;
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

    document.getElementById("stop1").disabled = true;
}



function link3(){
  document.getElementById("Link3").src = canzone3.Link;
}