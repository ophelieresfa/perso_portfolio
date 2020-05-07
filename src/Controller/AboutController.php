<?php

namespace App\Controller;

class AboutController extends MainController
{
    public function startMethod()
    {
        return $this->twig->render('about.twig');
    }
}