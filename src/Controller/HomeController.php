<?php

namespace App\Controller;

class HomeController extends MainController
{
    public function startMethod()
    {
        return $this->twig->render('home.twig');
    }
}