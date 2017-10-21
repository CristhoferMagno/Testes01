<!doctype <html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8"/>
    <title>Aprendendo PHP</title>

</head>
<body>
    <h1>Testando PHP</h1>
    <?php 
        /*
       $n1 = $_GET["a"];
       $n2 = $_GET["b"];
        echo "o valor de $n1 em real é R$". number_format($n1,2,",",".");
    '*/
    //referenciando variaveis
    /*
    $a = $_GET["a"];
    echo "o valor de a = $a <br>";
    $b = &$a;
    $b += 5;
    echo "o valor de b = $b <br>";
    echo " o novo valor de a = .$a <br>";
    */

    //VARIAVEIS DE VARIAVEIS
    $site ="curso";
    $$site ="PHP";

    echo "estamos estudando $site de $curso iehhh";
    
    ?>

</body>
</html>