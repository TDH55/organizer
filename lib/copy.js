const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const { fileTypes } = require("./extensions");
const CLI = require("clui");
const Spinner = CLI.Spinner;

const questions = [
	{
		type: "list",
		name: "fileTypes",
		message: "Choose which types of files to move",
		choices: fileTypes,
	},
];

const copyFiles = (directory, destination, extensions) => {
	const files = fs.readdirSync(directory);

	files.forEach((file) => {
		const filePath = directory + "/" + file;
		let isDirectory;
		try {
			isDirectory = fs.statSync(filePath).isDirectory();
		} catch (e) {
			// console.log("error reading if directory: " + e);
			//ignore this for now, file is not valid
		}
		if (isDirectory) {
			copyFiles(filePath, destination, extensions);
		} else {
			if (extensions.includes(path.extname(file))) {
				try {
					fs.copyFileSync(filePath, destination + "/" + file);
				} catch (e) {
					// console.log("error copying file: " + e);
					//TODO: change this to sum errors and alert user at the end
				}
			}
		}
	});
};

const promptCopy = (directory, target) => {
	inquirer.prompt(questions).then((answers) => {
		const status = new Spinner("Creating remote repository...");
		status.start();
		const extensions = answers.fileTypes;
		copyFiles(directory, target, extensions);
		status.stop();
	});
};

module.exports = {
	promptCopy,
};
