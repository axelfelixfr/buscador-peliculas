const app = Vue.createApp({
	data(){
		return{
			title: 'API Movies',

			/* El objeto movieData contendra toda la data que le pasemos al HTML como el titulo, año de la película */
			movieData: {},

			/* La propiedad movieTitle es para que tenga un titulo por defecto en el input */
			movieTitle: 'Spider Man'
		}
	},
	mounted(){
		// Con this.getMovie ejecutamos la función que contiene la API
		this.getMovie();
	},
	methods: {
		// La función tiene que ser asincrona
		async getMovie(){
			// Seleccionamos el movieTitle que contiene la película con this
			// Con toLowerCase() pasamos todas las letras en minusculas
			// Con replace() reemplazamos todos los espacios que se pondran en el titulo de la película en el
			// input por un "+" para colocarlos correctamente en la URL
			const search = this.movieTitle.toLowerCase().replace(/ /g, "+");

			// Con fetch hacemos la API 
			// Es necesario ponerle await para que no este en espera
			// Le pasamos la variable search para que busque la película que se ponga en el input
			const data = await fetch(`https://www.omdbapi.com/?apikey=35ecc9eb&t=${search}`);

			// Convertimos la data en JSON
			const jsonData = await data.json();

			// La pasamos a movieData que es el objeto que después se llamara a la hora de imprimir los datos
			this.movieData = jsonData;

			// Vemos los resultados de la búsqueda en la consola del navegador
			console.log(jsonData);
		}
	}
});