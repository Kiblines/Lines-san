<!-- contenu de la page en temporisation -->
<?php ob_start(); ?>
<form method="POST" action="<?= URL ?>back/connexion">
  <div class="form-group">
    <label for="login">Log</label>
    <input type="text" class="form-control" id="login" name="login" aria-describedby="loginHelp" placeholder="entrez votre log">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="password" name="password" placeholder="Password">
  </div>
 <button type="submit" class="btn btn-primary">Valider</button>
</form>
<?php
$content = ob_get_clean();
$titre = "Page de login lines-san";
require "views/commons/template.php";



