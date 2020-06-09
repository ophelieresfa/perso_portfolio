<?php

namespace App\Controller;

use App\Model\Factory\ModelFactory;

class QuoteController extends MainController
{
    public function startMethod()
    {
        return $this->twig->render('quote.twig');
    }
