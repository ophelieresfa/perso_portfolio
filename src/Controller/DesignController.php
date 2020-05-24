<?php

namespace App\Controller;

class DesignController extends MainController
{
    public function startMethod()
    {
        return $this->twig->render('design.twig');
    }
}