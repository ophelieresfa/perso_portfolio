<?php

namespace App\Controller;

use App\Controller\Extension\Extension;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class MainController
{
    protected $twig = null;

    public function __construct()
    {
        $this->twig = new Environment(new FilesystemLoader('../src/View'), array('cache' => false));
        $this->twig->addExtension(new Extension());

    }

    public function redirect(string $page, array $params = [])
    {
        $params['action'] = $page;
        header('Location: index.php?' . http_build_query($params));

        exit;
    }

    public function url(string $page, array $params = [])
    {
        $params['action'] = $page;

        return 'index.php?' . http_build_query($params);
    }
}