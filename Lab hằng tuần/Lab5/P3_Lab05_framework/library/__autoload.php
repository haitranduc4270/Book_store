<?php
    function Library($className) {
        $filename = ROOT . DS . 'library' . DS . strtolower($className) . '.class.php';
        if (is_readable($filename)) {
            require $filename;
        }
    }

    function Controller($className) {
        $filename = ROOT . DS . 'application' . DS . 'controllers' . DS . strtolower($className) . '.php';
        if (is_readable($filename)) {
            require $filename;
        }
    }

    function Models($className) {
        $filename = ROOT . DS . 'application' . DS . 'models' . DS . strtolower($className) . '.php';
        if (is_readable($filename)) {
            require $filename;
        }
    }

    spl_autoload_register("Models");
    spl_autoload_register("Library");
    spl_autoload_register("Controller");

