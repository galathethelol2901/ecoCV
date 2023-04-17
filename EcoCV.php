<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Test Modal Bootstrap</title>
  <!-- Inclure les fichiers CSS de Bootstrap -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" integrity="sha384-pa7ozjoaL6yLH6u1+WXBz4n4nR8o/Qv9XuTweE2T/SxWw/XkcL1qVFDJjKdxOBOz" crossorigin="anonymous">
</head>
<body>

  <!-- Bouton de déclenchement du modal -->
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Ouvrir le modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Titre du modal</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Contenu du modal
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          <button type="button" class="btn btn-primary">Enregistrer</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Inclure jQuery et Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-hdPakfPi+2xk3BzH2tIF9dJAgOJjlma06aCXIlJIDlEweKs8p1ZjiOJZ0cXnX7dJ" crossorigin="anonymous"></script>

</body>
</html>