<?php ob_start(); ?>

<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Nom</th>
      <th scope="col">Pays</th>
      
    </tr>
  </thead>
  <tbody>
    <?php foreach($editeur as $editeur): ?>
    <tr>
      
      <td><?=$editeur['editeur_id']?></td>
      <td><?=$editeur['editeur_libelle']?></td>
      <td><?=$editeur['editeur_pays']?></td>
      <td><button type="button" class="btn btn-primary">Modifier</button></td>
      <td><button type="button" class="btn btn-primary">Supprimer</button></td>
        <td>
            <form method ="post" action="<?= URL ?>back/editeur/suppression" onSubmit="return confirm ('voulez vous vraiment supprimer l'editeur ?');">
                <input type="hidden" name="editeur_id" value="<?=$editeur['editeur_id']?>">
                <button type="submit" class="btn btn-primary">Supprimer</button>
    </td>
    </tr>
    <?php endforeach; ?>
   
  </tbody>
</table>

<?php 
$content = ob_get_clean();
$titre = " Visualisation des éditeurs";
require "views/commons/template.php";