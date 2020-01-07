const _ = require("lodash");

/**
* Copies the config file from the generator templates to the target dir,
* changing the name of the file to the slugged version of the package name
*
* @param  {yeoman-generator} generator The Yeoman generator instance
* @return {array} Array of question prompts
*/

function classname(val) {
  return _.upperFirst(_.camelCase(val));
}

module.exports = function(generator) {
  return [
    {
      type: "question",
      name: "app.name",
      message: "App name",
      default: generator.appname
    },
    {
      type: "question",
      name: "vendor.name",
      message: "Vendor name",
      default: generator.props.vendor.name
    },
    {
      type: "input",
      name: "app.namespace.php",
      message: "PHP namespace",
      default: function(prompts) {
        return `${classname(prompts.vendor.name)}\\${classname(prompts.app.name)}`;
      }
    },
    {
      type: "question",
      name: "app.basename",
      message:
      "Package basename (used for naming the various files such as the ServiceProvider, config etc)",
      default: function(prompts) {
        return classname(prompts.app.name);
      }
    },
    {
      type: "question",
      name: "app.license",
      message: "License",
      default: "MIT"
    },
    {
      type: "question",
      name: "author.name",
      message: "Author name",
      default: generator.user.git.name()
    },
    {
      type: "question",
      name: "author.email",
      message: "Author email",
      default: generator.user.git.email()
    }
  ];
};