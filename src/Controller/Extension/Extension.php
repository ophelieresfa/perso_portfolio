<?php

namespace App\Controller\Extension;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class Extension extends AbstractExtension
{
    public function getFunctions()
    {
        return array(
            new TwigFunction('url', array($this, 'url'))
        );

    }

    public function url(string $page, array $params = [])
    {
        $params['action'] = $page;

        return 'index.php?' . http_build_query($params);
    }
}