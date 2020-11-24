const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');



let comando = argv._[0];

switch (comando){
	case 'crear':
		let tarea = porHacer.crear(argv.descripcion);
		console.log(tarea);
	break;
	case 'listar':
		let listado = porHacer.getListado();
		for(let tarea of listado){
			console.log("=====Por hacer=====".green);
			console.log(tarea.desc);
			console.log("Estatus: ", tarea.completado);
			console.log("===================".green);
		}
	break;
	case 'actualizar':
		let actualizar = porHacer.actualizar(argv.descripcion, argv.estatus);
		console.log(actualizar);
	break;
	case 'borrar':
		let borrado = porHacer.borrar(argv.descripcion);
		console.log(borrado);
	break;
	default:
		console.log('Comando no reconocido');
	break;
}