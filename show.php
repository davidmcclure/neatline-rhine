
<?php echo head(array(
  'title' => nl_getExhibitField('title'),
  'bodyclass' => 'neatline show'
)); ?>

<!-- Exhibit. -->
<div id="exhibit">
  <?php echo nl_getExhibitMarkup(); ?>
</div>

<!-- Exhibit. -->
<div id="buttons">
  <div class="btn-group" data-toggle="buttons">

    <div class="btn btn-primary active">
      <input type="radio" name="layer" value="ortelius" checked> Ortelius
    </div>

    <div class="btn btn-primary">
      <input type="radio" name="layer" value="kaerio"> Kaerio
    </div>

  </div>
</div>

<?php echo foot(); ?>
