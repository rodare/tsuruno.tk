<?php

header("Content-Type: text/html; charset=utf-8");

if(isset($_POST['email'])) {
     
    // CHANGE THE TWO LINES BELOW
    $email_to = "Rodrigo.szweda1@gmail.com";
     
    $email_subject = "Contact from my website";
     
     
    function died($error) {
        // your error code can go here
        echo "Lo sentimos, pero se encontraron uno o más errores en el formulario que envió.";
        echo "Los errores aparecen abajo.<br /><br />";
        echo $error."<br /><br />";
        echo "Por favor regrese y arregle los errores.<br /><br />";
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['first_name']) ||
        !isset($_POST['last_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['comments'])) {
        died('Lo sentimos, pero parece haber un problema con el formulario que envió.');       
    }
     
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'La dirección e e-mail que ingresó parece no ser válida.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'El nombre que escribió parece no ser válido.<br />';
  }
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'El apellido que escribió parece no ser válido.<br />';
  }
  if(strlen($comments) < 2) {
    $error_message .= 'Los comentarios que escribió parecen no ser válidos.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Los detalles del formulario abajo.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
     
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- place your own success html below -->
 
<!doctype html>
	<html lang="es">
<head>
	<meta charset="utf-8"/>
	<title>Rodrigo</title>
	<link rel="stylesheet" href="css/style.css"/>
	<link rel="icon" href="favicon.ico" /> 
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"> 
        <meta name="description" content="Galería de imágenes" />
        <meta name="keywords" content="jquery, carousel, image gallery, slider, responsive, flexible, fluid, resize, css3" />
		<meta name="author" content="Codrops" />
		<link rel="shortcut icon" href="../favicon.ico"> 
        <link rel="stylesheet" type="text/css" href="css/demo.css" />
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<link rel="stylesheet" type="text/css" href="css/elastislide.css" />
		<link href='https://fonts.googleapis.com/css?family=PT+Sans+Narrow&v1' rel='stylesheet' type='text/css' />
		<link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css' />
</head>

<body>
<div class="wrap">
  <header>
		<div class="elheader"><div id="logo"><a href="index.html"><img src="img/montana.gif" alt="Atacama Bio logo" style="float:left;width:374px;height:200px;"/></a></div></div>


 <div class="navigation">
	<ul>
	<div class="dropdown">
    <a href="index.html"><button class="dropbtn">Home</button></a>
</div>
	<div class="dropdown">
   <a href="about.html"><button class="dropbtn">About</button></a>
</div>
	<div class="dropdown">
  <a href="gallery.html"><button class="dropbtn">Gallery</button></a>

</div>
	<div class="dropdown">
  <a href="videos.html"><button class="dropbtn">Videos</button></a>

</div>
	<div class="dropdown">
  <a href="contact.html"><button class="dropbtn">Contact</button></a>
</div>
</div>
</header>

 <div class="content">
  <h2>Contacto</h2>

 <p>Thank you for contacting me. I will respond to you as soon as I can.<br> Greetings,<br><br> Rodrigo Szweda</p>

 </div>	

<aside>
	<ul>
		<li><a href="noticias.html">Noticias</a></li>
		<li><a href="descargas.html">Descargas</a></li>
		
		<li><a href="links.html">Links</a></li>
	</ul>
</aside>
</div>
</body>
</html>
 
<?php

exit;
}


?>
