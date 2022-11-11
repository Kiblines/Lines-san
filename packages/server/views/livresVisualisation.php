<?php ob_start(); ?>

<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Livre</th>
            <th scope="col">Description</th>
            <th scope="col" colspan="2">Titre</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($livres as $livre) : ?>
            <tr>
                <td><?= $livre['livre_isbn'] ?></td>
                <td><?= $livre['animal_titre'] ?></td>
                <td><?= $livre['animal_prix'] ?></td>
                <td>
                    <form method="post" action="">
                        <input type="hidden" name="livre_isbn" value="<?= $livre['animal_isbn'] ?>" />
                        <button class="btn btn-warning" type="submit">Modifier</button>
                    </form>
                </td>
                <td>
                    <form method="post" action="<?= URL ?>back/livres/validationSuppression" onSubmit="return confirm('Voulez-vous vraiment supprimer ?');">
                        <input type="hidden" name="editeur_id" value="<?= $livre['livre_id'] ?>" />
                        <button class="btn btn-danger" type="submit">Supprimer</button>
                    </form>
                </td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>

<?php 
$content = ob_get_clean();
$titre = "Les livres";
require "views/commons/template.php";