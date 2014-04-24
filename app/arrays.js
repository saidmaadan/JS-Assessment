if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);

    },

    sum : function(arr) {
        // for(i = 0; i < arr.length; i++){
        //     return i;
        // }

    },

    remove: function (arr) {
       return arr.push(2);


    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
        return arr.append(item);

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);


    },

    insert : function(arr, item, index) {
        return arr.insert(item, 'index');

    },

    count : function(arr, item) {
        return arr.length;

    },

    duplicates : function(arr) {


    },

    square : function(arr) {
        return square(arr*arr);


    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
