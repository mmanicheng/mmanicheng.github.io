const data = {
    "rightColumn": {
        "boxes": [
            {
                "link": "jwapp.html",
                "topImgSrc": "img/Cover/CoverJwApp.webp",
                "bgImgSrc": "img/Cover/CoverJwAppBg.webp",
                "title": "Juwai App",
                "subtitle": "Chinese Property App Redesign"
      },
            {
                "link": "jwasia.html",
                "topImgSrc": "img/Cover/CoverJwAsia.webp",
                "bgImgSrc": "img/Cover/CoverJwAsiaBg.webp",
                "title": "Juwai.asia",
                "subtitle": "Asia Real Estate Platform"
      },
            {
                "link": "jw_event.html",
                "topImgSrc": "img/Cover/CoverEvent.webp",
                "bgImgSrc": "img/Cover/CoverEventBg.webp",
                "title": "Event Hub",
                "subtitle": "Juwai B2C Webpage & CMS"
      },
            
            {
                "link": "jw_home.html",
                "topImgSrc": "img/Cover/CoverJwHome.webp",
                "bgImgSrc": "img/Cover/CoverJwHomeBg.webp",
                "title": "Juwai Homepage",
                "subtitle": "Chinese Property Webpage Redesign"
      },
            {
                "link": "ezwfm.html",
                "topImgSrc": "img/Cover/CoverEzwfm.webp",
                "bgImgSrc": "img/Cover/CoverEzwfmBg.webp",
                "title": "ezWFM & Kronos Plugin",
                "subtitle": "Workforce Management Platform"
      },
            {
                "link": "abridge_gzh.html",
                "topImgSrc": "img/Cover/CoverGZH.webp",
                "bgImgSrc": "img/Cover/CoverGZHBg.webp",
                "title": "Abridge",
                "subtitle": "Digital Editorial Design"
      },
            {
                "link": "mkp.html",
                "topImgSrc": "img/Cover/CoverProperity.webp",
                "bgImgSrc": "img/Cover/CoverProperityBg.webp",
                "title": "Properity",
                "subtitle": "Landing Page | Banner Ads | EDM"
      },
                        {
                "link": "mk1.html",
                "topImgSrc": "img/Cover/CoverLondon.webp",
                "bgImgSrc": "img/Cover/CoverLondonBg.webp",
                "title": "One Thames City",
                "subtitle": "Landing Page | Banner Ads | EDM"
      }                 
    ]
    }
};

const rightColumn = document.getElementById('homeRightColumn');
data.rightColumn.boxes.forEach(box => {
  const boxDiv = document.createElement('div');
  boxDiv.className = 'box';
  const aTag = document.createElement('a');
  aTag.href = box.link;
  aTag.className = 'a';

  const topImg = document.createElement('img');
  topImg.src = box.topImgSrc;
  topImg.className = 'topImg';

  const bgImg = document.createElement('img');
  bgImg.src = box.bgImgSrc;
  bgImg.className = 'BgImg';

  const coverTextDiv = document.createElement('div');
  coverTextDiv.className = 'coverText';

  const titleDiv = document.createElement('span');
  titleDiv.className = 'coverTitle';
  titleDiv.textContent = box.title;

  const subtitleDiv = document.createElement('span');
  subtitleDiv.className = 'coverSubtitle';
  subtitleDiv.textContent = box.subtitle;

  aTag.appendChild(topImg);
  aTag.appendChild(bgImg);
  aTag.appendChild(coverTextDiv);
  coverTextDiv.appendChild(titleDiv);
  coverTextDiv.appendChild(subtitleDiv);
  boxDiv.appendChild(aTag);
  rightColumn.appendChild(boxDiv);
});

//Load Home Cover one by one
document.addEventListener("DOMContentLoaded", function() {
      var boxes = document.querySelectorAll(".box");
      var index = 0;
      function showBox() {
        if (index < boxes.length) {
          boxes[index].style.opacity = "1";
          index++;
          setTimeout(showBox, 200); // Set the time interval to 200ms
        }
      }
      showBox();
    });

//Hover to refresh Home Mugshot 
const myObject = document.getElementById('mugshot');
  myObject.addEventListener('mouseover', function() {
    myObject.data = myObject.data; // Refresh the object by setting its data attribute to the same value
  });