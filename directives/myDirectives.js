freelancerClone.directive("changeClass", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      elementToChange = document.querySelector("#splash");
      $(elementToChange).toggleClass(attrs.changeClass);
    });
  }
});
