var canzone1 = {
    Titolo: "taxi sulla luna",
    Immagine_del_disco : src = "tonyff.jpeg",
    Informazioni:  "babababababababababababa",
    Audio_della_canzone:  src="audio.mp3",
    Link:  "https://www.youtube.com/watch?v=pkjzbSA-Gac"
};
  

var canzone2 = {
    Titolo: "Sorry",
    Immagine_del_disco: "sorry_album1.jpg", 
    Informazioni: "Una canzone di Justin Bieber, pubblicata nel 2015. Parla di scuse e rimpianto.",
    Audio_della_canzone: "audio.mp3", 
    Link: "https://www.youtube.com/watch?v=fRh_vgS2dFE"  
  };
  
  var canzone3 = {
    Titolo: "boss",
    Immagine_del_disco: "tonyff.jpeg", 
    Informazioni: "bababababab.",
    Audio_della_canzone: "audio.mp3", 
    Link: "https://www.youtube.com/watch?v=pkjzbSA-Gac"
  };

  
  
  function play_audio(){
    document.getElementById('play_audio').play();
  }
  function info_justin(){
    document.getElementById("info_justin").innerHTML=`info: ${canzone1.Informazioni}`;
  }
  function info_tony1(){
    document.getElementById("info_tony1").innerHTML=`info: ${canzone2.Informazioni}`;
  }
  function info_tony2(){
    document.getElementById("info_tony2").innerHTML=`info: ${canzone3.Informazioni}`;
  }