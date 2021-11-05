#!/usr/bin/env node
const arg = require("arg");
const createFiles = require("./utils/createFiles");
const {
  print,
  handleFileCreateFail,
  printHelpMessage,
  printInfoMessage,
} = require("./utils/print");
const { readFileSync, existsSync } = require("fs");
const fs = require("fs");

let args = {};
try {
  args = arg({
    // Types
    "-c": Boolean,
    "--class": Boolean,
    "--resource": Boolean,
    "-r": Boolean,
    "--help": Boolean,
    "--version": Boolean,
    "-v": Boolean,
  });
} catch (err) {
  handleFileCreateFail(err);
  process.exit();
}

args["--help"] && printHelpMessage();

const boot = {
  path: null,
  style: null,
  isClassComp: false,
  resource: false,
  version: false,
  EGG: null,
};

const handleStyle = (template) => {
  template.forEach((a) => {
    const style = a.split(":")[0];
    const rest = a.split(":")[1];

    if (style === "style") {
      switch (rest) {
        case "css":
          boot.style = "css";
          break;
        case "scss":
          boot.style = "scss";
          break;
        case "sass":
          boot.style = "sass";
          break;
        case "less":
          boot.style = "less";
          break;
        default:
          break;
      }
    } else {
      return;
    }
  });
};
handleStyle(args["_"]);

const handleEGG = (template) => {
  template.forEach((a) => {
    const EGG = a.split(":")[0];
    let rest = a.split(":")[1];

    if (EGG === "EGG") {
      boot.EGG = "FALSE EGG";
      if (!rest) return;
      rest = rest[0];
      if (/[a-zA-Z]/.test(rest)) {
        boot.EGG = rest.toUpperCase();
      }
    } else {
      return;
    }
  });
};
handleEGG(args["_"]);

if (boot.EGG) {
  if (boot.EGG === "FALSE EGG") {
    print({ type: "FALSE EGG" });
  } else {
    if (existsSync(`./content/${boot.EGG}.txt`)) {
      const data = readFileSync(`./content/${boot.EGG}.txt`, "utf-8");
      // console.log(data);
    } else {
      print({ type: "FALSE EGG" });
    }
  }
  process.exit();
}

if (args["--resource"] || args["-r"]) {
  boot.resource = true;
}
if (args["--version"] || args["-v"]) {
  boot.version = true;
}

if (args["--class"] || args["-c"]) {
  boot.isClassComp = true;
}
boot.path = args["_"][0];

if (boot.version) {
  print({ type: "VERSION" });
  process.exit();
}

if (!boot.path && !boot.version) {
  printInfoMessage();
}
//==========================================================
// console.log(boot);
//==========================================================
const { path, style, resource, isClassComp } = boot;

if (path && !style && !resource) {
  if (isClassComp) {
    createFiles(boot, "CLASS");
  } else {
    createFiles(boot, "FUN");
  }
}

if (path && style && !resource) {
  if (isClassComp) {
    createFiles(boot, "CLASS_WITH_STYLE");
  } else {
    createFiles(boot, "FUN_WITH_STYLE");
  }
}

if (path && style && resource) {
  if (isClassComp) {
    createFiles(boot, "CLASS_RESOURCE_WITH_STYLE");
  } else {
    createFiles(boot, "FUN_RESOURCE_WITH_STYLE");
  }
}

if (path && !style && resource) {
  if (isClassComp) {
    createFiles(boot, "CLASS_RESOURCE");
  } else {
    createFiles(boot, "FUN_RESOURCE");
  }
}
