#!/usr/bin/env node

const program = require("commander");
const { promptMove } = require("../lib/move");
const { promptCopy } = require("../lib/copy");
const fs = require("fs");
//TODO: add options - new directory location - extensions instead of type
//TODO: handle if the target name is already taken
//TODO: add a spinner
program
	.command("move")
	.alias("mv")
	.description("Move files to a new location")
	.option(
		"-d, --destination [value]",
		"Destination Path",
		process.cwd() + "/organizer"
	)
	.action((args) => {
		console.log(args);
		//TODO: move to prompt method and fix dir location
		try {
			fs.mkdirSync("./organizer");
		} catch (e) {
			return console.log("Error making the directory: " + e);
		}
		const targetDirectory = args.destination;
		promptMove(process.cwd(), targetDirectory);
	});

program
	.command("copy")
	.alias("cp")
	.description("Copy files to a new location")
	.option(
		"-d, --destination [value]",
		"Destination Path",
		process.cwd() + "/organizer"
	)
	.action((args) => {
		console.log(args);
		//TODO: move to prompt method and fix dir location
		try {
			fs.mkdirSync("./organizer");
		} catch (e) {
			console.log("Error making the directory: " + e);
		}
		const targetDirectory = args.destination;
		promptCopy(process.cwd(), targetDirectory);
	});

program.parse(process.argv);
