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
    Immagine_del_disco: "immagini/tonyff_boss.jpeg", 
    Informazioni: "bababababab.",
    Audio_della_canzone: "mp3/Tony Effe BOSS.mp3", 
    Link: "https://www.youtube.com/watch?v=pkjzbSA-Gac"
  };

  
  
  function play_audio1() {
    document.getElementById('play_audio1').src = canzone1.Audio_della_canzone;
    document.getElementById('play_audio1').play();
    document.getElementById("stop1").disabled = false;
}

function stop1() {
  document.getElementById('play_audio1').pause()
  document.getElementById("stop1").disabled = true;
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
    document.getElementById("info1").innerHTML=`info: ${canzone1.Informazioni}`;
  }
  function info2(){
    document.getElementById("info2").innerHTML=`info: ${canzone2.Informazioni}`;
  }
  function info3(){
    document.getElementById("info3").innerHTML=`info: ${canzone3.Informazioni}`;
  }

  function caricamento_pagina(){
    document.getElementById("titolo1").innerHTML=canzone1.Titolo;
    document.getElementById("titolo2").innerHTML=canzone2.Titolo;
    document.getElementById("titolo3").innerHTML=canzone3.Titolo;

    document.getElementById("img1").src = canzone3.Immagine_del_disco;
    document.getElementById("img2").src = canzone3.Immagine_del_disco;
    document.getElementById("img3").src = canzone3.Immagine_del_disco;

    document.getElementById("stop1").disabled = true;
  }