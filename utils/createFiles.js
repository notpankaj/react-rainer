const fs = require("fs");
const {
  print,
  handleFileCreateFail,
  printSuccessStyle,
  printSuccessComp,
} = require("./print");
const {
  STR_FUN,
  STR_CLASS,
  STR_FUN_WITH_STYLE,
  STR_CLASS_WITH_STYLE,
  STR_FUN_RESOURCE_WITH_STYLE,
  STR_CLASS_RESOURCE_WITH_STYLE,
  STR_CLASS_RESOURCE,
  STR_FUN_RESOURCE,
} = require("./template");

const createFiles = (boot, MAKE) => {
  const { path: PATH, style } = boot;

  const arr = PATH.split("/");
  const fileName = arr.pop().replace(".js", "");
  let dirName = arr.join("/");

  if (!fileName) {
    print({
      type: "WARN",
      payload: {
        text: `
      ❗  File Name Is Required ❗
    `,
      },
    });
    process.exit();
  }

  if (fs.existsSync(dirName)) {
    // console.log("PRESENT");
  } else {
    // console.log("MAKEing");
    try {
      fs.mkdirSync(dirName, { recursive: true });
    } catch (err) {
      handleFileCreateFail(err);
    }
  }

  switch (MAKE) {
    case "CLASS": {
      fs.writeFile(
        `${dirName}/${fileName}.js`,
        STR_CLASS({ name: fileName }),
        (err) => {
          if (err) {
            handleFileCreateFail(err);
          }
          printSuccessComp(`${dirName}/${fileName}`);
        }
      );
      break;
    }
    case "FUN": {
      fs.writeFile(
        `${dirName}/${fileName}.js`,
        STR_FUN({ name: fileName }),
        (err) => {
          if (err) {
            handleFileCreateFail(err);
          }
          printSuccessComp(`${dirName}/${fileName}`);
        }
      );
      break;
    }
    case "FUN_WITH_STYLE": {
      fs.writeFile(
        `${dirName}/${fileName}.js`,
        STR_FUN_WITH_STYLE({ name: fileName, stylesheet: style }),
        (err) => {
          if (err) {
            handleFileCreateFail(err);
          }
          printSuccessComp(`${dirName}/${fileName}`);
        }
      );
      fs.writeFile(
        `${dirName}/${fileName.toLowerCase()}.${style}`,
        "",
        (err) => {
          if (err) {
            handleFileCreateFail(err);
          }
          printSuccessStyle(`${dirName}/${fileName.toLowerCase()}.${style}`);
        }
      );
      break;
    }
    case "CLASS_WITH_STYLE": {
      fs.writeFile(
        `${dirName}/${fileName}.js`,
        STR_CLASS_WITH_STYLE({ name: fileName, stylesheet: style }),
        (err) => {
          if (err) {
            handleFileCreateFail(err);
          }
          printSuccessComp(`${dirName}/${fileName}`);
        }
      );
      fs.writeFile(
        `${dirName}/${fileName.toLowerCase()}.${style}`,
        "",
        (err) => {
          if (err) {
            handleFileCreateFail(err);
          }
          printSuccessStyle(`${dirName}/${fileName.toLowerCase()}.${style}`);
        }
      );
      break;
    }
    case "FUN_RESOURCE_WITH_STYLE": {
      fs.writeFile(
        `${dirName}/${fileName}.js`,
        STR_FUN_RESOURCE_WITH_STYLE({ name: fileName, stylesheet: style }),
        (err) => {
          if (err) {
            handleFileCreateFail(err);
          }
          printSuccessComp(`${dirName}/${fileName}`);
        }
      );
      fs.writeFile(
        `${dirName}/${fileName.toLowerCase()}.${style}`,
        "",
        (err) => {
          if (err) {
            handleFileCreateFail(err);
          }
          printSuccessStyle(`${dirName}/${fileName.toLowerCase()}.${style}`);
        }
      );
      break;
    }
    case "CLASS_RESOURCE_WITH_STYLE": {
      fs.writeFile(
        `${dirName}/${fileName}.js`,
        STR_CLASS_RESOURCE_WITH_STYLE({ name: fileName, stylesheet: style }),
        (err) => {
          if (err) {
            handleFileCreateFail(err);
          }
          printSuccessComp(`${dirName}/${fileName}`);
        }
      );
      fs.writeFile(
        `${dirName}/${fileName.toLowerCase()}.${style}`,
        "",
        (err) => {
          if (err) {
            handleFileCreateFail(err);
          }
          printSuccessStyle(`${dirName}/${fileName.toLowerCase()}.${style}`);
        }
      );
      break;
    }
    case "CLASS_RESOURCE": {
      fs.writeFile(
        `${dirName}/${fileName}.js`,
        STR_CLASS_RESOURCE({ name: fileName }),
        (err) => {
          if (err) {
            handleFileCreateFail(err);
          }
          printSuccessComp(`${dirName}/${fileName}`);
        }
      );
      break;
    }
    case "FUN_RESOURCE": {
      fs.writeFile(
        `${dirName}/${fileName}.js`,
        STR_FUN_RESOURCE({ name: fileName }),
        (err) => {
          if (err) {
            handleFileCreateFail(err);
          }
          printSuccessComp(`${dirName}/${fileName}`);
        }
      );
      break;
    }
  }
};

module.exports = createFiles;
