

const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = ()=>{
	let data = JSON.stringify(listadoPorHacer);

	fs.writeFile(`db/data.json`, data, (err) => { 
		  if (err){
		  	return(err);
		  }else{
		  	return `El archivo fue creado`.green;	
		  }
		});
}

const crear = (desc) =>{
	cargarDB();	
	let porHacer = {
		desc,
		completado: false
	};


	listadoPorHacer.push(porHacer);
	guardarDB();
	return porHacer;
}

const getListado = () =>{
	cargarDB();
	return listadoPorHacer;
}

const cargarDB = ()=>{
	try {
		listadoPorHacer = require('../db/data.json');	
	}catch(error){
		listadoPorHacer = [];
	}
}

const actualizar = (desc, estatus = true)=>{
	cargarDB();

	let index = listadoPorHacer.findIndex(tarea=> tarea.desc === desc);

	if (index>=0) {
		listadoPorHacer[index].completado = estatus;
		guardarDB();
		return true;	
	}else{
		return false;
	}
}

const borrar = (desc)=>{
	cargarDB();

	let index = listadoPorHacer.findIndex(tarea=> tarea.desc === desc);
	if (index>=0) {
		listadoPorHacer.splice(index,1);
		guardarDB();
		return true;
	}else{
		return false;
	}
}

module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}