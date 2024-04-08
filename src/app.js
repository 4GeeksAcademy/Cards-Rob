/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const showRandomCard = () => {

    let icons = ["♠", "♥", "♣", "♦"];
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

    const randomCardValue = array => {
      return array[Math.floor(Math.random() * array.length)]; 
    };

    const randomIcon = randomCardValue(icons); 
    
    const cardRandomNumber = document.querySelector('#middleCard');
    cardRandomNumber.innerHTML = randomCardValue(values);

    const cardRandomIcons = document.querySelectorAll(".cardIcon");
    cardRandomIcons.forEach(icon => {
      let iconValue = randomIcon; 
      icon.innerHTML = iconValue;


      if (iconValue === "♥" || iconValue === "♦") {
        icon.classList.add("text-body-danger");
      } else {
        icon.classList.remove("text-body-danger");
      }
    });

  };

  showRandomCard();

};
