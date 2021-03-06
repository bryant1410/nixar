// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, p){
    return repo.commands.push({
      name: "order",
      desc: "Sorts lines",
      input: 'lines',
      output: 'lines',
      enabled: true,
      compile: function(){
        return function(mask, lines){
          var index, pad, maxes, compare;
          if ((mask != null ? mask : "") === "") {
            return p.sort(
            lines);
          } else {
            index = parseInt(mask);
            pad = function(str, len){
              return ((str === '' ? ' ' : str) + Array(len).join(' ')).slice(0, len);
            };
            maxes = [];
            compare = function(a, b){
              var fun, res;
              fun = (function(){
                switch (false) {
                case !(a[index] + b[index]).toString().match(/[0-9]+/):
                  return parseInt;
                default:
                  return function(it){
                    return it;
                  };
                }
              }());
              res = (function(){
                switch (false) {
                case !(fun(a[index]) < fun(b[index])):
                  return -1;
                case !(fun(a[index]) > fun(b[index])):
                  return 1;
                default:
                  return 0;
                }
              }());
              return res;
            };
            return p.map(function(it){
              return it.map(function(item, c){
                return pad(item, maxes[c]);
              }).join(' ');
            })(
            p.sortWith(compare)(
            p.each(function(s){
              return s.forEach(function(_, i){
                var ref$;
                return maxes[i] = Math.max(s[i].length, (ref$ = maxes[i]) != null ? ref$ : 0);
              });
            })(
            p.map(function(it){
              return it.split(/[ ]+/);
            })(
            lines))));
          }
        };
      }
    });
  };
}).call(this);
