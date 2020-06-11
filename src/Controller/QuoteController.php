<?php

namespace App\Controller;

use App\Model\Factory\ModelFactory;

class QuoteController extends MainController
{
    public function startMethod()
    {
        return $this->twig->render('quote.twig');
    }

    public function dataMethod()
    {
        $name = $_POST["name"];
        $firstname = $_POST["firstname"];
        $email = $_POST["email"];

        echo $name . " " . $firstname . " " . $email;

        if (!empty($_POST)) {
            $data['name'] = $_POST['name'];
            $data['firstname'] = $_POST['firstname'];
            $data['email'] = $_POST['email'];

            ModelFactory::getModel('Quote')->createData($data);

            return $this->twig->render('quote.twig');
        }
        return $this->twig->render('quote.twig');
    }
}
