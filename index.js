(function(global, factory) {
    if (typeof exports === "object" && exports) {
        factory(exports); // CommonJS
    }  else {
        factory(global.jsTpl = {}); // <script>
    }
}(this, function(jsTpl) {

    function fGen(template) {
        var compiled = 'var o="";',
	    last = 'begin',
            reader;
        while ((reader = REGEX_JSTL_SCOPE.exec(template)) !== null) {

        }

        compiled += COMPILERS[last].end + 'return o;';
        return new Function('it', compiled);
    }


    var REGEX_JSTL_SCOPE = /<\?js((?:.|\r|\n)+?)\?>|@\{(.+?)\}/g; // lazy match
    var CODE_PRE = '<?js';
    var PARAM_PRE = '@{';


    var COMPILERS = {
        begin: {
            // the end of the matched code slice
            addString: 'o+="',
            addCode: '',
            addParam: 'o+=',
            end: ''
        },

        // string between code snippets and variables
        string: {
            addString: '',
            addCode: '";',
            addParam: '"+',
            end: '";'
        },

        // JavaScript code between `<?js` and its corresponding `?>`
        code: {
            addString: 'o+="',
            addCode: '',
            addParam: 'o+=',
            end: ''
        },

        // JavaScript variable between `@{` and `}`
        param: {
            addString: '+"',
            addCode: ';',
            addParam: '+',
            end: ';'
        }
    };



    jsTpl.render = function(template, data) {
        return fGen(template)(data);
    };

    jsTpl.compile = function(template) {
        return fGen(template);
    };

}));
