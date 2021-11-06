const table = document.getElementById("lista-carro");
const url = 'http://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3';


/* const buscarUsuariosNoBancoDeDadosFetchApi = () => {
  //  Stream Object => que significa que quando chamamos o método json (), uma Promise é retornada, pois a leitura do stream acontecerá de forma assíncrona.
   return fetch(' https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3')
             .then(response => console.log(response.json()))
             .catch(err => err)
 } */


 function append(parent, el) {
  return parent.appendChild(el);
}

 fetch(url)
  .then(function(response) {return response.json()})
  .then( function(data) {

    let carros = [data];
   
    return carros.map(function (carro){
      
      let row = document.createElement('tr');
      let manufacturer = document.createElement('td');
      manufacturer.innerHTML = carro.Marca;
      let model = document.createElement('td');
      model.innerHTML = carro.Modelo;
      let year = document.createElement('td');
      year.innerHTML = carro.AnoModelo;

      append(row,manufacturer)
      append(row,model)
      append(row,year)
      append(table, row)
      
    }) 
  })
  .catch(function(error) {
    console.log(error);
  }); 
