let names = [
    "Apple iPhone XS Max",
    "Samsung Galaxy A73",
    "Samsung Galaxy S22 Ultra.",
    "Samsung Galaxy A13",
    "Samsung Galaxy S22",
    "Samsung Galaxy A23",
    "Samsung Galaxy Tab A7.",
    "Samsung Galaxy Z Flip 3.",
    "Samsung Galaxy Z Fold 3.",
    "Samsung Galaxy S21 FE.",
    "Samsung Galaxy M52.",
    "Samsung Galaxy S22 Ultra.",
    "HP Envy x360",
    "Dell Inspiron 5410 14 Inches",
    "Dell 5515 15.6 inches",
    "Xiaomi Watch S1 Active",
    "Infinix Note 12 ",
    "Google Pixel 6 Pro",
    "iPhone 12 pro",
    "Xiaomi Poco F4 GT",
    "Oppo Reno 6 Pro",
    "Samsung Galaxy S22+",
    "Xiaomi Redmi 10 Pro",
    "iPhone 11 pro",
    "Samsung Galaxy A72",
    "Apple Watch Series 7",
    "Apple Watch Nike Series 7",
    "Apple Watch SE (40mm)",
    "Xiaomi 12",
    "Samsung Galaxy Z Fold 2",
    "Samsung Galaxy Note 20",
    "Vivo X80",
    "Mi 11T",
    "Mi 11T",
    "Vivo V23",
    "Vivo V20",
    "Vivo Y21T",
    "Vivo V11",
    "Vivo Y51s",
    "Vivo Y30",
    "Dell 5515 Gaming Laptop",
    "HP Pavilion Gaming Laptop",
    "HP Victus Series",
    "Apple iPhone 12 Mini",
    "Apple iPhone 12 pro",
    "Apple iPhone 13 pro",
    "Apple iPhone 12 pro max",
    "Mi Watch",
  ];
  //Sort names in ascending order
  let sortedNames = names.sort();
  
  //reference
  let input = document.getElementById("input");
  
  //Execute function on keyup
  input.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
  
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        //create li element
        let listItem = document.createElement("li");
        //One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames('" + i + "')");
        //Display matched part in bold
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);
      }
    }
  });
  function displayNames(value) {
    input.value = value;
    removeElements();
  }
  function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }








  $(document).ready(function () {
    $("#addtocart").on("click", function () {
        var button = $(this);
        var cart = $("#cart");
        var cartTotal = cart.attr("data-totalitems");
        var newCartTotal = parseInt(cartTotal) + 1;

        button.addClass("sendtocart");
        setTimeout(function () {
            button.removeClass("sendtocart");
            cart.addClass("shake").attr("data-totalitems", newCartTotal);
            setTimeout(function () {
                cart.removeClass("shake");
            }, 500);
        }, 300);
    });
});



$(document).ready(function () {
  $("#addtocart2").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});
$(document).ready(function () {
  $("#addtocart3").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});
$(document).ready(function () {
  $("#addtocart4").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});


$(document).ready(function () {
  $("#addtocart5").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});


$(document).ready(function () {
  $("#addtocart6").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});


$(document).ready(function () {
  $("#addtocart7").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});

$(document).ready(function () {
  $("#addtocart8").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});


$(document).ready(function () {
  $("#addtocart9").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});


$(document).ready(function () {
  $("#addtocart10").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});

$(document).ready(function () {
  $("#addtocart11").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});

$(document).ready(function () {
  $("#addtocart12").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});

$(document).ready(function () {
  $("#addtocart13").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});


$(document).ready(function () {
  $("#addtocart14").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});


$(document).ready(function () {
  $("#addtocart15").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});


$(document).ready(function () {
  $("#addtocart16").on("click", function () {
      var button = $(this);
      var cart = $("#cart");
      var cartTotal = cart.attr("data-totalitems");
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass("sendtocart");
      setTimeout(function () {
          button.removeClass("sendtocart");
          cart.addClass("shake").attr("data-totalitems", newCartTotal);
          setTimeout(function () {
              cart.removeClass("shake");
          }, 500);
      }, 300);
  });
});













 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once


    
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });



  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star2").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });


  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star3").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });


  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star4").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });


  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star5").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });


  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star6").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });


  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star7").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });


  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star8").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });



  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star9").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });


  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star1").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });



  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star10").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });


  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star11").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });



  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star12").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });


  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star13").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });



  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star14").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });


  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
  
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).
  
    // Create the defaults once
    var pluginName = "ratingStar",
      defaults = {
        initialStar: 0,
        selectedClass: "is-selected",
        hoverClass: "is-hover",
        afterClick: null
      };
  
    // The actual plugin constructor
    function Plugin(element, options) {
      this.$element = $(element);
  
      this.options = $.extend({}, defaults, options);
  
      this._defaults = defaults;
      this._name = pluginName;
  
      this.init();
    }
  
    Plugin.prototype = {
      init: function () {
        var self = this;
  
        this.$starItems = this.$element.find(".c-rating-star__item");
  
        /* 1. Visualizing things on Hover - See next part for action on click */
        this.$starItems
          .on("mouseover", function () {
            self.onMouseOver(self, this);
          })
          .on("mouseout", function () {
            self.onMouseOut(self, this);
          });
  
        /* 2. Action to perform on click */
        this.$starItems.on("click", function () {
          self.onClick(self, this);
        });
      },
  
      onClick: function (context, jqContext) {
        var $this = $(jqContext);
        var $stars = context.$starItems;
        var onStar = parseInt($this.data("value"), 10); // The star currently selected
  
        // remove all active star
        $stars.removeClass("is-selected");
  
        for (i = 0; i < onStar; i++) {
          $stars.eq(i).addClass("is-selected");
        }
  
        var $selected = $this.parent().children(".is-selected").last();
        var ratingValue = parseInt($selected.data("value"), 10);
  
        if (context.options.afterClick) {
          context.options.afterClick(ratingValue, $selected);
        }
      },
  
      onMouseOver: function (context, jqContext) {
        // The star currently mouse on
        var currentStar = parseInt($(jqContext).data("value"), 10);
  
        // all start item
        var $stars = context.$starItems;
  
        // Now highlight all the stars that's not after the current hovered star
        for (i = 0; i <= currentStar; i++) {
          if (i < currentStar) {
            $stars.eq(i).addClass("is-hover");
          } else {
            $stars.eq(i).removeClass("is-hover");
          }
        }
  
        console.log("mouse over on: ", jqContext);
        console.log("current star: ", currentStar);
      },
  
      onMouseOut: function (context, jqContext) {
        for (i = 0; i <= context.$starItems.length; i++) {
          context.$starItems.eq(i).removeClass("is-hover");
        }
      }
    };
  
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);
  
  $(document).ready(function () {
    $("#js-rating-star15").ratingStar({
      afterClick: function (value, el) {
        $(".c-box").fadeIn(200);
        $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
      }
    });
  });









  
 /*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
(function ($, window, document, undefined) {
  // undefined is used here as the undefined global
  // variable in ECMAScript 3 and is mutable (i.e. it can
  // be changed by someone else). undefined isn't really
  // being passed in so we can ensure that its value is
  // truly undefined. In ES5, undefined can no longer be
  // modified.

  // window and document are passed through as local
  // variables rather than as globals, because this (slightly)
  // quickens the resolution process and can be more
  // efficiently minified (especially when both are
  // regularly referenced in your plugin).

  // Create the defaults once
  var pluginName = "ratingStar",
    defaults = {
      initialStar: 0,
      selectedClass: "is-selected",
      hoverClass: "is-hover",
      afterClick: null
    };

  // The actual plugin constructor
  function Plugin(element, options) {
    this.$element = $(element);

    this.options = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Plugin.prototype = {
    init: function () {
      var self = this;

      this.$starItems = this.$element.find(".c-rating-star__item");

      /* 1. Visualizing things on Hover - See next part for action on click */
      this.$starItems
        .on("mouseover", function () {
          self.onMouseOver(self, this);
        })
        .on("mouseout", function () {
          self.onMouseOut(self, this);
        });

      /* 2. Action to perform on click */
      this.$starItems.on("click", function () {
        self.onClick(self, this);
      });
    },

    onClick: function (context, jqContext) {
      var $this = $(jqContext);
      var $stars = context.$starItems;
      var onStar = parseInt($this.data("value"), 10); // The star currently selected

      // remove all active star
      $stars.removeClass("is-selected");

      for (i = 0; i < onStar; i++) {
        $stars.eq(i).addClass("is-selected");
      }

      var $selected = $this.parent().children(".is-selected").last();
      var ratingValue = parseInt($selected.data("value"), 10);

      if (context.options.afterClick) {
        context.options.afterClick(ratingValue, $selected);
      }
    },

    onMouseOver: function (context, jqContext) {
      // The star currently mouse on
      var currentStar = parseInt($(jqContext).data("value"), 10);

      // all start item
      var $stars = context.$starItems;

      // Now highlight all the stars that's not after the current hovered star
      for (i = 0; i <= currentStar; i++) {
        if (i < currentStar) {
          $stars.eq(i).addClass("is-hover");
        } else {
          $stars.eq(i).removeClass("is-hover");
        }
      }

      console.log("mouse over on: ", jqContext);
      console.log("current star: ", currentStar);
    },

    onMouseOut: function (context, jqContext) {
      for (i = 0; i <= context.$starItems.length; i++) {
        context.$starItems.eq(i).removeClass("is-hover");
      }
    }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

$(document).ready(function () {
  $("#js-rating-star16").ratingStar({
    afterClick: function (value, el) {
      $(".c-box").fadeIn(200);
      $(".c-box__body").html("<span>" + el.attr("title") + "</span>");
    }
  });
});












buybtns = document.querySelectorAll(".buybtn")
mycart = document.querySelector(".table")

if (localStorage.getItem("carthtml")) {
  mycart = document.querySelector(".table")
  mycart.innerHTML = JSON.parse(localStorage.getItem("carthtml"))
  addRemoveability()
  updatePrice()
}

for (i = 0; i < buybtns.length; i++) {
  buybtns[i].addEventListener('click', function () {
    btnevent = event.target
    btnparent = btnevent.parentElement.parentElement

    itemtittle = btnparent.querySelector(".itemtittle").innerText
    itemptice = btnparent.querySelector(".itemptice").innerText

    mycart.innerHTML += `
      <tr>
      <td>${itemtittle}</td>
      <td class="prodprice">${itemptice}</td>
      <td><button class="btn btn-outline-danger w-100 text-center rmvbtn">Remove</button></td>
      </tr>
      `
    addRemoveability()
    updatePrice()
    savetoLocalStorage()
  })
}

function savetoLocalStorage() {
  localStorage.setItem("carthtml", JSON.stringify(mycart.innerHTML))
}

function addRemoveability() {
  rmvbtns = document.querySelectorAll(".rmvbtn")

  for (i = 0; i < rmvbtns.length; i++) {
    rmvbtns[i].addEventListener('click', function () {
      rmvbtnevent = event.target
      rmvbtnevent.parentElement.parentElement.remove()
      updatePrice()
      savetoLocalStorage()
    })
  }
}
function updatePrice() {
  prodprice = mycart.querySelectorAll(".prodprice")
  // console.log(prodprice)
  sum = 0

  for (i = 0; i < prodprice.length; i++) {
    sum = sum + parseInt(prodprice[i].innerText.replace("Rs. ", ""))
  }

  document.querySelector(".totalprice").innerText = sum
  localStorage.setItem("Tottal", sum.toString())

}





    function validate() {
        name = document.getElementById("name").value
        pass = document.getElementById("pass").value

        if (name.length < 3) {
            alert("your username is too short")
            return false
        }
        if (pass.length < 3) {
            alert("your password is too short")
            return false
        }
    }


    var logID = "log",
    log = $('<div id="' + logID + '"></div>');
$("body").append(log);
$('[type*="radio"]').change(function() {
    var me = $(this);
    log.html(me.attr("value"));
});








const thumbs = document.querySelector(".thumb-img").children;

function changeImage(event) {
    document.querySelector(".pro-img").src = event.children[0].src

    for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove("active");
    }
    event.classList.add("active");
}