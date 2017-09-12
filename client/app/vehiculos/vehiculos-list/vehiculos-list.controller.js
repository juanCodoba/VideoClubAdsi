'use strict';
(function(){

class VehiculosListComponent {
  constructor() {
    this.vehiculos = [{
      id:1,
      marca:"Kia",
      descripcion:"modelo 2017,transmision automatica, 4 puertas ",
      valorAlquiler:101723,
      tipo:"pequeño"
      },{
        id:2,
        marca:"Kia",
        descripcion:"modelo 2017,transmision automatica, 4 puertas ",
        valorAlquiler:201523,
        tipo:"mediano"
      },{
          id:3,
          marca:"Renault",
          descripcion:"modelo 2017,transmision automatica, 4 puertas ",
          valorAlquiler:138823,
          tipo:"mediano"
        },{
          id:4,
          marca:"Kia",
          descripcion:"modelo 2017,transmision automatica, 4 puertas ",
          valorAlquiler:216903,
          tipo:"grandes"
        },{
          id:5,
          marca:"Renault",
          descripcion:"modelo 2017,transmision automatica, 4 puertas ",
          valorAlquiler:250000,
          tipo:"Gama alta"
        }

  ];
  }
  $onInit(){
    for (var i = 0; i < this.vehiculos.length; i++) {
      this.vehiculos[i].valorAlquiler  = this.vehiculos[i].valorAlquiler * 0.15 + this.vehiculos[i].valorAlquiler;

          if (this.vehiculos[i].tipo == "mediano") {
              this.vehiculos[i].descuento = this.vehiculos[i].valorAlquiler - this.vehiculos[i].valorAlquiler * 0.2;

      }
        console.log(this.vehiculos[i].valorAlquiler + " el valor del descuento " + this.vehiculos[i].descuento);
    }
  }
}
angular.module('videoClubApp')
  .component('vehiculosList', {
    templateUrl: 'app/vehiculos/vehiculos-list/vehiculos-list.html',
    controller: VehiculosListComponent,
    controllerAs:'vm'
  });

})();
