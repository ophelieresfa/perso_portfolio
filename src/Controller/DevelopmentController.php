<?php

namespace App\Controller;

class DevelopmentController extends MainController
{
    public function startMethod()
    {
        return $this->twig->render('development.twig');
    }
}