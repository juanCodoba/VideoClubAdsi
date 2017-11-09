'use strict';
(function(){

class VehiculosListComponent {
  constructor($state,$stateParams) {
    this.$state = $state;
    this.$stateParams = $stateParams;
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
    this.vehiculosid = [{
     vehiculos:{
      id : null
     }
  }];

  // this.query = {
  //   order: descripcion,
  //   limit: 5,
  //   page :1
  // };
  }
  $onInit(){
    for (var i = 0; i < this.vehiculos.length; i++) {
      this.vehiculos[i].valorAlquiler  = this.vehiculos[i].valorAlquiler * 0.15 + this.vehiculos[i].valorAlquiler;

          if (this.vehiculos[i].tipo == "mediano") {
              this.vehiculos[i].descuento = this.vehiculos[i].valorAlquiler - this.vehiculos[i].valorAlquiler * 0.2;

      }  if (this.vehiculos[i].tipo == "Gama alta") {
              this.vehiculos[i].aumento = this.vehiculos[i].valorAlquiler + this.vehiculos[i].valorAlquiler * 0.05 ;

      }
        console.log(this.vehiculos[i].valorAlquiler + " el valor del descuento " + this.vehiculos[i].descuento +"El valor de aumento es " +  this.vehiculos[i].aumento);
    }
    this.vehiculos.list({id: this.$stateParams.id}).promise
    .then(response =>{
      this.vehiculos = response;
      console.console.log("VEHICULOS",this.vehiculos);
      this.vehiculos.id = response.id;

    })
  }

}
VehiculosListComponent.$inject = ['$state', '$stateParams'];

angular.module('videoClubApp')
  .component('vehiculosList', {
    templateUrl: 'app/vehiculos/vehiculos-list/vehiculos-list.html',
    controller: VehiculosListComponent,
    controllerAs:'vm'
  });

})();
