require([
  "libs/jquery-1.7.1.min",
  "libs/modernizr-2.0.6",
  "libs/plugins",
  "libs/respond.min",
  "libs/jquery.pngFix.pack"
  ], function() {
  //callback to fire up any extra scripts
    $(document).ready(function() {
      $(document).pngFix();
    });
});
