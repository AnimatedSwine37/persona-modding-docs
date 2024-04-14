const matter = require('gray-matter');

module.exports.matter = function (input, options) {
    return matter(input, options);
};

module.exports.stringify = function(file, data, options) {
    return matter.stringify(file, data, options);
}