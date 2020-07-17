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
        if (!empty($_POST)) {
            $data['name'] = $_POST['name'];
            $data['firstname'] = $_POST['firstname'];
            $data['email'] = $_POST['email'];
            $data['choice'] = $_POST['choice'];
            $data['refcrea'] = $_POST['refcrea'];
            $data['vectoriel'] = $_POST['vectoriel'];
            $data['version'] = $_POST['version'];
            $data['recto'] = $_POST['recto'];
            $data['unity'] = $_POST['unity'];
            $data['network'] = $_POST['network'];
            $data['budget'] = $_POST['budget'];

            ModelFactory::getModel('Quote')->createData($data);

            return $this->twig->render('quote.twig');
        }
        return $this->twig->render('quote.twig');
    }
}
