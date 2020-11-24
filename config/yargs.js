const opt = {
	descripcion: {
		demand: true,
		alias: 'd'
	},
	estatus: {
		alias: 'e',
		default: true
	}
} 

const argv = require('yargs')
	.command('crear','Crea una nueva tarea por hacer', opt)
	.command('actualizar', 'Actualiza el estatus de una tarea', opt)
	.command('borrar', 'Borra un registro de la lista', opt)
	.help()
	.argv;


module.exports = {
	argv
}