const chalk = require("chalk");
const { helpMsg, infoMsg, versionMsg } = require("./messages");

const print = (action) => {
  const { type, payload } = action;
  switch (type) {
    case "WARN":
      console.log(chalk.red(payload.text));
      break;
    case "PRIMARY":
      console.log(chalk.hex("#DEADED").bold(payload.text));
      break;
    case "INFO":
      console.log(chalk.keyword("orange").italic(payload.text));
      break;
    case "VERSION":
      console.log(versionMsg);
      break;
    case "FALSE EGG":
      console.log(
        chalk.red(`
            Ain't no 🥚  Egg  🥚 like that.
            `)
      );
      break;

    default:
      console.log(
        chalk.red(`
            Ain't no 🎂  cake  🎂 like that.
            `)
      );
      break;
  }
};

// HELPER FUNCTIONS
const handleFileCreateFail = (err) => {
  print({
    type: "WARN",
    payload: {
      text: `
    ❗  ${err}  ❗
  `,
    },
  });
  print({
    type: "INFO",
    payload: {
      text: `
    ⚠️  " rainer --help " , TIP: check #File_Nameing -OR- #File_Path  ⚠️
  `,
    },
  });
  process.exit();
};

const printSuccessStyle = (url) => {
  print({
    type: "PRIMARY",
    payload: {
      text: `
        💅  created: ${url}  💅
      `,
    },
  });
};
const printSuccessComp = (url) => {
  print({
    type: "PRIMARY",
    payload: {
      text: `
      ☔  created: ${url}.js  ☔
      `,
    },
  });
};

const printHelpMessage = () => {
  console.log(helpMsg);
  process.exit();
};
const printInfoMessage = () => {
  console.log(infoMsg);
  process.exit();
};

const printEgg = (EGG) => {
  console.log("HERE IT IS ", EGG);
};
module.exports = {
  print,
  printEgg,
  handleFileCreateFail,
  printSuccessStyle,
  printSuccessComp,
  printInfoMessage,
  printHelpMessage,
};
