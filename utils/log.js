const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00FF00").bold('[ SHAHRIYAR ERROR ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#00FF00").bold('[ SHAHRIYAR ERROR ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#00FF00").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00FF00").bold('[ KING SHAHRIYAR ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#00FF00").bold('[ KING SHAHRIYAR ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FF00").bold(`[ KING SHAHRIYAR ] » `) + data);
			break;
	}
	}