

Neatline.module('Rhine', function() {

  var lastMap;

  $(function() {

    var buttons = $('input[name="layer"]');

    function setMap() {

      var map = buttons.filter(':checked').val();

      Neatline.vent.trigger('setFilter', {
        source: 'RHINE',
        key: 'layers',
        evaluator: function(r) {
          return r.hasTag(map);
        }
      });

      $('body').addClass(map);
      $('body').removeClass(lastMap);

      lastMap = map;

    }

    // Set map on radio change.
    $('input[name="layer"]').change(setMap);

    // Apply initial selection.
    setMap();

  });

});
