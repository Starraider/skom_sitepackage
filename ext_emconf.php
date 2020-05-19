<?php

/**
 * Extension Manager/Repository config file for ext "skom_sitepackage".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'SKom Sitepackage',
    'description' => 'Basic Sitepackage by SKom',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.17-10.4.99',
            'rte_ckeditor' => '8.7.0-10.4.99',
            'bootstrap_package' => '10.0.0-11.99.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Skom\\SkomSitepackage\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Sven Kalbhenn',
    'author_email' => 'sven@skom.de',
    'author_company' => 'SKom',
    'version' => '9.2.11',
];
