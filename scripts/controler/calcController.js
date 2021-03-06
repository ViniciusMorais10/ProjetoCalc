class CalcController {
   constructor() {

      this._displayCalcEL = document.querySelector("#display");
      this._dateEL = document.querySelector("#data");
      this._timeEL = document.querySelector("#hora");
      this._locale = 'pt-BR';
      this._currentDate;
      this.initialize();
      this.initButtonEvents();

   }

   initialize() {

      this.setDisplayTime();

      setInterval(() => {
         this.setDisplayTime();
      }, 1000);

   }

   addEventListenerAll(element,events,fn){
      events.split(' ').forEach(event => {
         element.addEventListener(event, fn, false)
      });
   }

   initButtonEvents() {

      let buttons = document.querySelectorAll("#buttons > g, #parts > g");

      buttons.forEach((btn,index)=>{
         this.addEventListenerAll(btn, 'click drag', e => {

            console.log(btn.className.baseVal.replace("btn-",""));

         });

         this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{
            btn.style.cursor = "pointer";
         });
      });
   }



   setDisplayTime() {

      this.displayDate = this.currentDate.toLocaleDateString(this._locale);
      this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

   }

   get displayTime() {
      return this._timeEL.innerHTML;
   }

   set displayTime(value) {
      this._timeEL.innerHTML = value;
   }

   get displayDate() {
      return this._dateEL.innerHTML;
   }

   set displayDate(value) {
      this._dateEL.innerHTML = value;
   }

   get displayCalc() {

      return this._displayCalcEL.innerHTML;

   }

   set displayCalc(value) {
      this._displayCalcEL.innerHTML = value;
   }

   get currentDate() {
      return new Date();
   }

   set currentDate(value) {
      this._currentDate = value;
   }












}

