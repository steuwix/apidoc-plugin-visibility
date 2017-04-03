var app = {};

module.exports = {
  init: function(_app) {
    app = _app;
    // TODO
    //app.addHook('parser-find-elements', parserFindVisibilityApis);

    app.parsers.apivisibility = {
      parse     : parseVisibility,
      path      : 'local',
      method    : 'insert'
    };
  }

};

function parseVisibility(content) {
  var list = content.split(" ");
  var result = content;
  if(list.length > 1){
      result = list;
  }
  return {
    visibility : result
  };
}
