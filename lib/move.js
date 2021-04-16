const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const { fileTypes } = require("./extensions");

const questions = [
	{
		type: "list",
		name: "fileTypes",
		message: "Choose which types of files to move",
		choices: fileTypes,
	},
];

const moveFiles = (directory, destination, extensions) => {
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
			moveFiles(filePath, destination, extensions);
		} else {
			if (extensions.includes(path.extname(file))) {
				fs.renameSync(filePath, destination + "/" + file);
			}
		}
	});
	// //TODO: delete the empty directory
};

const promptMove = (directory, target) => {
	inquirer.prompt(questions).then((answers) => {
		const extensions = answers.fileTypes;
		moveFiles(directory, target, extensions);
	});
};

module.exports = {
	promptMove,
};
