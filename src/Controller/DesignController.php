<?php

namespace App\Controller;

use App\Model\Factory\ModelFactory;

class DesignController extends MainController
{
    public function startMethod()
    {
        return $this->twig->render('design.twig');
    }
}