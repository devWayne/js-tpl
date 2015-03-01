function jsTpl() {
    var compiled = 'var o="";',
        reader;
    while ((reader = REGEX_JSTL_SCOPE.exec(template)) !== null) {

    }
    return new Function('it', compiled);
}


var REGEX_JSTL_SCOPE = /<\?js((?:.|\r|\n)+?)\?>|@\{(.+?)\}/g; // lazy match
var CODE_PRE = '<?js';
var PARAM_PRE = '@{';


exports.render = function(template, data) {
    return jsTpl(template)(data);
};

exports.compile = function(template) {
    return jsTpl(template);
};
