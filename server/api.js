'use strict'
const api = require('express').Router();
const db = require('../db');
const Models = require('../db/models/');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => {
	console.log(Models.Student)
	res.send({hello: 'world'})
})

//Get Routes 

	//all campuses route
	api.get('/campuses', (req,res,next) => {
		Models.Campus.findAll({
			where:{}
		})
		.then((result)  => {
			res.send(result);
		})
		.catch(next)
	});

	//campus by id route
	api.get('/campus/:id',(req,res,next) => {
		Models.Campus.findById(req.params.id)
		.then((result) => (res.data))
		.then((result)=>{
			res.send(result);
		})
		.catch(next);
	});

	//ALL STUDENTS
	api.get('/students', (req, res, next) => {
		Models.Student.findAll({
			where: {}
		})
		.then((result) => {
			res.send(result)
		})
		.catch(next);
	});

	//STUDENT BY ID
	api.get('/students/:id',(req,res,next) => {
		Models.Student.findById(req.params.id)
		.then((result) => (res.data))
		.then((result)=>{
			res.send(result);
		})
		.catch(next);
	});

//POST ROUTES

	//CREATE NEW CAMPUS
	api.post('/campus', (req, res, next) => {
		Models.Campus.create({name: req.body.name, image: req.body.image})
		.then((newCampus) => {
			res.send(newCampus.get({plain:true}));
		})
		.catch(next)
	});

	//CREATE NEW STUDENT
	api.post('/student', (req, res, next) => {
		console.log(req.body);
		Models.Student.create({name: req.body.name, email: req.body.email, CampusId: req.body.CampusId})
		.then((newStudent) => {
			res.send(newStudent.get({plain: true}));
		})
		.catch(next)
	});

//PUT ROUTES

	//UPDATE INFO FOR ONE STUDENT
	api.put('/student', (req,res,next) => {
		let studentPromise = Models.Student.findOne({where: {name: req.body.studentName}});
		let campusPromise = Models.Campus.findOne({where: {name: req.body.campusName}});

		Promise.all([studentPromise,campusPromise])
		.then((result) =>{
			console.log(result);
		})
		
	})
	

	//UPDATE INFO FOR ONE CAMPUS
	api.put('/campus', (req,res,next) => {
		Models.Campus.findOne({where: {name: req.body.campusName}})
		.then((foundCampus) =>{
			foundCampus.update({
				name: req.body.campusName,
				image: req.body.image
			},
			{	
				returning: true,
				plain:true
			}
			)
			.then((updatedCampus) =>{
				res.send(result[1].data.values)
			});
		})
		
	})

//DELETE ROUTES

	//DELETE STUDENT
	api.delete('/student/:id', (req, res, next) => {
		console.log('IN API', req.body);
		Models.Student.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(() => {res.sendStatus(200)})
		.catch(next)
		})
		
	

	//DELETE CAMPUS
	api.delete('/campus/:id', (req, res, next) => {
		Models.Campus.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(() => {res.sendStatus(200)})
		.catch(next)
		
		})
	


// .then((student) => {
			
// 			//only update name
// 			if(req.body.email === undefined){
// 				student.name = req.body.name;
// 				student.save({fields: ['name']})
// 				.then((updatedStudent) => {
// 					res.send(updatedStudent.get({plain:true}))
// 				});
// 			} 
			
// 			//only udpate email
// 			else if(req.body.name === undefined) {
				
// 			}
// 		})

module.exports = api