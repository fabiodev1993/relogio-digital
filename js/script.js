class RelogioDigital {
  constructor(horas,minutos,segundos){
    this.horas = document.getElementById(horas);
    this.minutos = document.getElementById(minutos);
    this.segundos = document.getElementById(segundos);
  }

  relogio(){
    setInterval(function tempo(){
      let horario = new Date();
      let hr = horario.getHours();
      let min = horario.getMinutes();
      let seg = horario.getSeconds();

      if(this.horas.innerText < 10) hr = '0' + hr;
      if(this.minutos.innerText < 10) min = '0' + min;
      if(this.segundos.innerText < 10) seg = '0' + seg;

      if(this.horas.innerText > 18) {
        document.body.style.background = 'linear-gradient(120deg, #fff, #000)'
      } ;

      this.horas.innerText = hr;
      this.minutos.innerText = min;
      this.segundos.innerText = seg;
    });
  };

  init(){
    this.relogio();
  }
};

const relogioDigital = new RelogioDigital('horas','minutos','segundos');
relogioDigital.init();