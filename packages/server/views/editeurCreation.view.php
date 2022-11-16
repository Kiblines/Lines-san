<?php ob_start(); ?>

<form method="POST" action="<?= URL ?>back/editeur/creationValidation">
    <div class="form-group">
        <label for="editeur_libelle">Editeur</label>
        <input type="text" class="form-control" id="editeur_libelle" name="editeur_libelle">
    </div>
    <div class="form-group">
        <label for="famille_description">Pays</label>
        <textarea class="form-control" id="editeur_pays" name="editeur_pays" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Valider</button>
</form>
<?php 
$content = ob_get_clean();
$titre = "Page d'ajout d'editeur";
require "views/commons/template.php";