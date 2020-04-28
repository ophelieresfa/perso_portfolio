<?php

namespace App\Controller;

use App\Controller\Globals\GetController;
use App\Controller\Globals\PostController;

abstract class GlobalController
{
    protected $get     = null;
    protected $post    = null;

    public function __construct()
    {
        $this->get     = new GetController();
        $this->post    = new PostController();
    }
}