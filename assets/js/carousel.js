const carousel = document.getElementById('carousel');
    const originalContent = `<a href="g/ab_ppt.html" alt="Powerpoint"><img src="assets/img/cover/gCover5.webp" /></a><a href="g/ad.html" alt="Real Estate Banner Ads"><img src="assets/img/cover/gCover_ad.webp" /></a><a href="g/jw_mgz.html" alt="Company Brochure"><img src="assets/img/cover/gCover_mgz.webp" /></a><a href="g/jwcamp.html" alt="Event Campaign"><img src="assets/img/cover/gCover_campaign.webp" /></a><a href="g/kb.html" alt="Educational Banner Ads"><img src="assets/img/cover/gCover2.webp" /></a>`;

    function addContent() {
      let contentToAdd = originalContent;
      carousel.innerHTML += contentToAdd;
      if (carousel.scrollWidth > window.innerWidth * 2) {
        return; // Stop adding content if it's long enough
      }
      requestAnimationFrame(addContent);
    }

    window.addEventListener('load', addContent);