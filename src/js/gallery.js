"use strict";

var swiper = new Swiper('.swiper', {
          //slidesPerView: 3,  3 Bilder gleichzeitig
          spaceBetween: 20, // Abstand zwischen den Bildern
          slidesPerGroup: 1, // Scrollt immer 1 Bild weiter
          loop: true, // Endlos-Schleife
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },

          pagination: { 
            el: '.swiper-pagination', 
            clickable: true, 
            dynamicBullets: true // Optional: Schönere Pagination-Punkte
          },
          
          breakpoints: {
              1024: { 
                slidesPerView: 3,
                pagination: false // Keine Pagination auf großen Bildschirmen
              },
              768: { 
                slidesPerView: 2,
                pagination: { 
                  el: '.swiper-pagination', 
                  clickable: true 
                } 
              },
              480: { 
                slidesPerView: 1,
                pagination: { 
                  el: '.swiper-pagination', 
                  clickable: true 
                } 
              }
          }
      });