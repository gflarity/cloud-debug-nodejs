// Generated by CoffeeScript 1.11.0
(function() {
  var Animal, Lion, allSquares, nums, someOb, square, x,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Animal = (function() {
    function Animal(name, sound) {
      this.name = name;
      this.sound = sound;
    }

    Animal.prototype.hello = function() {
      return 'The ' + name + ' says ' + sound;
    };

    return Animal;

  })();

  Lion = (function(superClass) {
    extend(Lion, superClass);

    function Lion() {
      Lion.__super__.constructor.call(this, 'Lion', 'roar');
    }

    return Lion;

  })(Animal);

  someOb = {
    a: 'a',
    b: 'b'
  };

  console.log(new Lion().alert);

  nums = [1, 2, 3, 4, 5];

  square = function(x) {
    return x * x;
  };

  allSquares = (function() {
    var i, len, results;
    results = [];
    for (i = 0, len = nums.length; i < len; i++) {
      x = nums[i];
      results.push(square(x));
    }
    return results;
  })();

}).call(this);

//# sourceMappingURL=in.js.map
