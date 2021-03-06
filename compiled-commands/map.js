// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo){
    return repo.commands.push({
      name: "map",
      desc: "Transforms line",
      input: 'line',
      output: 'line',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        return function(mask, input){
          if ((mask != null ? mask : "") === "") {
            return input;
          }
          return mask.split('*').map(function(it){
            return it.yellow;
          }).join(input);
        };
      }
    });
  };
}).call(this);
