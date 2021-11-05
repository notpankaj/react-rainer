const chalk = require("chalk");
const helpMsg = `

              ┎┈┈┈┈┈┈┈┈┈┈┈୨♡୧┈┈┈┈┈┈┈┈┈┈┈┒
                  🌧️  ${chalk.blueBright("REACT RAINER")}  🌧️
              ┖┈┈┈┈┈┈┈┈┈┈┈୨♡୧┈┈┈┈┈┈┈┈┈┈┈┚

┒»»——————————————————-　${chalk
  .hex("#DEADED")
  .bold("# INFO")}　——————————————————-««
${chalk.hex(
  "#DEADED"
)(`Command Line script to generate [ components, files, and pages ] 
for ' REACT ' including React-Native and Next.js.`)}
┒»»———————————————————- 　${chalk.magenta("★")}  　———————————————————-««


┒»»——————————————————-　${chalk
  .hex("#DEADED")
  .bold("# FLAG")}　——————————————————-««
none :  if there is no flag included , basic functional component will be generated.

${chalk.blue.bold("-c, --class")}  :${chalk.green(
  "used to create class  component."
)}

${chalk.blue.bold("-r, --resource")} : ${chalk.green(
  "used to create componet including common lifecycle methods."
)}

${chalk.blue.bold("style:[OPTIONS]")}  : ${chalk.green(
  "this will create component with stylesheet attached to it."
)}
OPTIONS = [css, scss, sass, less].
eg: $ rainer src/pages/About style:sass 
┒»»———————————————————- 　${chalk.magenta("★")}  　———————————————————-««


┒»»————————————-　# path/file naming　————————————-««
creating component without folder --> ./filename -OR- ./filename.js
when creating files with directories or inside Directory use the following path pattern.  

./src/folderName/FileName to create file in given path 
-OR-
src/folderName/FileName to create file in given pathnode
┒»»———————————————————- 　${chalk.magenta("★")}  　———————————————————-««




`;

const infoMsg = `

              ┎┈┈┈┈┈┈┈┈┈┈┈୨♡୧┈┈┈┈┈┈┈┈┈┈┈┒
                🌧️  ${chalk.blueBright("REACT RAINER")}  🌧️
              ┖┈┈┈┈┈┈┈┈┈┈┈୨♡୧┈┈┈┈┈┈┈┈┈┈┈┚

┒»»——————————————————-　${chalk
  .hex("#DEADED")
  .bold("# INFO")}　——————————————————-««
${chalk.hex(
  "#DEADED"
)(`Command Line script to generate [ components, files, and pages ] 
for ' REACT ' including React-Native and Next.js.`)}
┒»»———————————————————- 　${chalk.magenta("★")}  　———————————————————-««

┒»»——————————————————-　${chalk
  .hex("#DEADED")
  .bold("# ✌️")}　——————————————————-««
${chalk.blue.bold("--help")}  :${chalk.green("user manually.")}
${chalk.blue.bold("-v, --version")}  :${chalk.green("check version.")}
${chalk.blue.bold("EGG:[OPTION]")}  :${chalk.green("Easter Egg.")}
## options for EGG are single alphabet from [a to Z].
example. $ rainer EGG:A  // hatchs an egg.
┒»»———————————————————- 　${chalk.magenta("★")}  　———————————————————-««




`;
const versionMsg = `

        ┎┈┈┈┈┈┈┈┈┈┈┈୨♡୧┈┈┈┈┈┈┈┈┈┈┈┒
            🌧️  ${chalk.blueBright("REACT RAINER")}  🌧️
        ┖┈┈┈┈┈┈┈┈┈┈┈୨♡୧┈┈┈┈┈┈┈┈┈┈┈┚


  (\_/)
  (•x•)
  (<🍦)
version: v1.3-BUNNY

`;

module.exports = { helpMsg, infoMsg, versionMsg };
