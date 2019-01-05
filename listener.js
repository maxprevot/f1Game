function declareListeners(event, car) { // gérer les fleches directionelles

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) { //gauche
      car.angle -= Math.PI / 60;
    }
    if (event.keyCode === 40) { //bas
      car.vx = -car.backSpeed;
    }
    if (event.keyCode === 38) { //haut
      car.vx = 7;
    }
    else if (event.keyCode === 39) { //droite
      car.angle += Math.PI / 60;
    }

  }, false);

  window.addEventListener('keyup', function (event) {
    car.vx = car.vy = 0;
  }, false);

}

