<?php

namespace App\Controller;

class PortfolioController extends MainController
{
    public function startMethod()
    {
        return $this->twig->render('portfolio.twig');
    }
}