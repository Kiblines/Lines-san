<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Lines-san</a>
  <img src="https://fr.shopping.rakuten.com/photo/drapeau-japon-mil-tec-1540190421_ML.jpg" width="30" height="30" alt="">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <?php if(!Securite::verifAccessSession()) :?>
                <li class="nav-item">
                    <a class="nav-link" href="<?= URL ?>back/login">Login</a>
                </li>
            <?php else : ?>
                <li class="nav-item">
                    <a class="nav-link" href="<?= URL ?>back/admin">Accueil</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    editeur
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="<?= URL ?>back/editeur/visualisation">Visualisation</a>
                    <a class="dropdown-item" href="<?= URL ?>back/editeur/creation">Création</a>
                    
              
                    
                     </div>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    livre
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="<?= URL ?>back/livre/visualisation">visualisation</a>
                    <a class="dropdown-item" href="<?= URL ?>back/livre/creation">Création</a>
                    
              
                    
                     </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?= URL ?>back/deconnexion">Deconnexion</a>
                </li>
            <?php endif; ?>
        </ul>
    </div>
</nav>