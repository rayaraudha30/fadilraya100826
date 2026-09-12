// ============================
// TOMBOL OPEN MEMORIES
// ============================

function openMemories() {

  const memories = document.getElementById("memories");

  memories.scrollIntoView({
    behavior: "smooth"
  });

}


// ============================
// MUSIC
// ============================

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async function () {

  try {

    if (music.paused) {

      await music.play();

      musicButton.classList.add("playing");

    } else {

      music.pause();

      musicButton.classList.remove("playing");

    }

  } catch (error) {

    alert(
      "musik belum ketemu 😭\n\n" +
      "pastikan nama file musik kamu:\n" +
      "musicTulus.mp3"
    );

  }

});


// ============================
// LIGHTBOX FOTO
// ============================

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const closeLightbox =
  document.getElementById("closeLightbox");


const allPhotos =
  document.querySelectorAll(
    ".photo img, .feature-photo img"
  );


allPhotos.forEach(function (photo) {

  photo.addEventListener("click", function () {

    if (
      photo.complete &&
      photo.naturalWidth !== 0
    ) {

      lightboxImage.src = photo.src;

      lightbox.classList.add("show");

    }

  });

});


// tutup tombol X

closeLightbox.addEventListener(
  "click",
  function () {

    lightbox.classList.remove("show");

    lightboxImage.src = "";

  }
);


// klik area luar foto

lightbox.addEventListener(
  "click",
  function (event) {

    if (event.target === lightbox) {

      lightbox.classList.remove("show");

      lightboxImage.src = "";

    }

  }
);


// tombol ESC

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      lightbox.classList.remove("show");

      lightboxImage.src = "";

    }

  }
);


// ============================
// CEK FOTO
// ============================

allPhotos.forEach(function (photo) {

  photo.addEventListener(
    "error",
    function () {

      console.log(
        "foto tidak ditemukan:",
        photo.src
      );

    }
  );

});