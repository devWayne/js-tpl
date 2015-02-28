function jsTpl(){

  return new Function('it', compiled);
}

exports.render = function(template, data){
    return jsTpl(template)(data);
};

exports.compile = function(template){
    return jsTpl(template);
};
