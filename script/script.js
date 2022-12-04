let markers = {
  "favorites": [{
      "src": "https://web.whatsapp.com/",
      "name": "Whatsapp",
      "img": "logos/whatsapp.svg"
  }, {
      "src": "https://www.youtube.com/",
      "name": "Youtube",
      "img": "logos/youtube.svg"
  }, {
      "src": "https://app.voxy.com/v2/#/home",
      "name": "Voxy",
      "img": "logos/voxy.png"
  }, {
      "src": "https://github.com/",
      "name": "Github",
      "img": "logos/github.svg"
  }, {
      "src": "https://jovenesaprogramar.schoology.com/course/6010874238/materials",
      "name": "Schoology",
      "img": "logos/schoology.png"
  }, {
      "src": "https://www.linkedin.com/",
      "name": "Linkedin",
      "img": "logos/linkedin.svg"
  }, {
      "src": "https://mail.google.com/mail/u/0/#all",
      "name": "Gmail",
      "img": "logos/gmail.svg"
  }],
  "develop": [{
      "src": "https://app.voxy.com/v2/#/home",
      "name": "Voxy",
      "img": "logos/voxy.png"
  }, {
      "src": "https://github.com/",
      "name": "Github",
      "img": "logos/github.svg"
  }, {
      "src": "https://jovenesaprogramar.schoology.com/course/6010874238/materials",
      "name": "Schoology",
      "img": "logos/schoology.png"
  }, {
      "src": "https://stackoverflow.com/",
      "name": "Stackoverflow",
      "img": "logos/stack_overflow.svg"
  }, {
      "src": "https://www.w3schools.com/",
      "name": "W3Schools",
      "img": "logos/W3Schools.png"
  }, {
      "src": "https://jsfiddle.net/",
      "name": "Jsfiddle",
      "img": "logos/jsfiddle.png"
  }, {
    "src": "https://developer.mozilla.org/es/",
    "name": "MDN Mozila",
    "img": "logos/MDN Mozila.png"
}],
  "socialNetwork": [{
      "src": "https://web.whatsapp.com/",
      "name": "Whatsapp",
      "img": "logos/whatsapp.svg"
  }, {
      "src": "https://www.facebook.com/",
      "name": "Facebook",
      "img": "logos/facebook.svg"
  }, {
      "src": "https://www.messenger.com/",
      "name": "Messenger",
      "img": "logos/messenger.svg"
  }, {
      "src": "https://www.instagram.com/",
      "name": "Instagram",
      "img": "logos/instagram.svg"
  }, {
      "src": "https://www.linkedin.com/",
      "name": "Linkedin",
      "img": "logos/linkedin.svg"
  }, {
      "src": "https://web.telegram.org/",
      "name": "Telegram",
      "img": "logos/telegram.svg"
  }, {
      "src": "https://twitter.com/",
      "name": "Twitter",
      "img": "logos/twitter.svg"
  }, {
      "src": "https://twitch.tv/",
      "name": "Twitch",
      "img": "logos/twitch.svg"
  }],
  "googleServices": [{
      "src": "https://messages.google.com/web/conversations",
      "name": "Messages",
      "img": "logos/messages.svg"
  }, {
      "src": "https://mail.google.com/mail/u/0/#all",
      "name": "Gmail",
      "img": "logos/gmail.svg"
  }, {
      "src": "https://www.youtube.com/",
      "name": "Youtube",
      "img": "logos/youtube.svg"
  }, {
      "src": "https://drive.google.com/drive/my-drive",
      "name": "Google Drive",
      "img": "logos/google_drive.svg"
  }, {
      "src": "https://www.google.com.uy/maps/",
      "name": "Google Maps",
      "img": "logos/google_maps.svg"
  }, {
      "src": "https://earth.google.com/web/",
      "name": "Earth",
      "img": "logos/google_earth.svg"
  }, {
      "src": "https://photos.google.com/",
      "name": "Google Photos",
      "img": "logos/google_photos.svg"
  }],
  "utilities": [{
      "src": "https://bigjpg.com/",
      "name": "Bigjpg",
      "img": "logos/bigjpg.svg"
  }, {
      "src": "http://www.testdevelocidad.com.uy/",
      "name": "Antel Speed Test",
      "img": "logos/antel_speed_test.svg"
  }, {
      "src": "https://www.spellboy.com/corrector-gramatical/",
      "name": "Spellboy",
      "img": "logos/spellboy.svg"
  }]
};
document.addEventListener("DOMContentLoaded", () => {
changeList("favorites");
});

function changeList(category) {
let markersToAdd = "";
for(icon of markers[category]){
  markersToAdd += `
      <a class="marker" href="${icon.src}" target="_blank">
        <abbr title="${icon.name}">
          <img class="icon" src="${icon.img}" alt="${icon.name}">
        </abbr>
      </a>
  `
}
document.getElementById("markerList").innerHTML = markersToAdd;
}
