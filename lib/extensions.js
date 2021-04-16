//TODO: sort alphabetically
const extensions = [".txt", ".jpeg", "jpg", ".gif", ".png"];

//TODO: add examples for display
const fileTypes = [
	{
		short: "Images",
		value: [".jpeg", ".jpg", ".png", ".gif", ".tif", ".raw", ".heic", ".bmp"],
		name: "Images (ex. .jpg, .png, .heic, etc...)",
	},
	{
		short: "Documents",
		value: [
			".doc",
			".docx",
			".docm",
			".pages",
			".gdoc",
			".odt",
			".odm",
			".pap",
			".pdax",
			".pdf",
			".md",
		],
		name: "Documents (ex. .docx, .pages, .pdf",
	},
	{
		short: "Text",
		value: [".txt", ".asc", ".TeX", ".json", ".csv", ".yaml"],
		name: "Text (ex. .txt, .asc, .TeX, etc...)",
	},
	{
		short: "Presentations",
		value: [".ppt", ".ey", ".keynote", ".gslides", ".pps"],
		name: "Presentations (ex. .ppt, .keynote, .gslides, etc...)",
	},
	{
		short: "Audio",
		value: [".raw", ".wav", ".flac", ".wv", ".mp1", ".mp2", ".mp3", ".ogg"],
		name: "Audio (ex. .mp3, .ogg, .wav)",
	},
	{
		short: "Spread Sheets",
		value: [
			"csv",
			".gsheet",
			".numbers",
			".ods",
			".tab",
			".xlk",
			".xls",
			"xlsb",
			".xlsm",
			".xlsx",
		],
		name: "Spread Sheets (ex. .numbers, .gsheet, .xls, etc...)",
	},
	{
		short: "Video",
		value: [".gif", ".m4v", ".mp4", "quicktime", ".mpeg", ".3gp", ".mov"],
		name: "Video (ex. .mov, .mp4, .quicktime, etc...)",
	},
];

module.exports = {
	extensions,
	fileTypes,
};
