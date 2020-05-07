<?php

namespace App\Controller;

class ContactController extends MainController
{
    public function startMethod()
    {
        return $this->twig->render('contact.twig');
    }
}