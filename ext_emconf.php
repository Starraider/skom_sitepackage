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
            'typo3' => '9.5.25-10.4.99',
            'bootstrap_package' => '11.0.3-11.99.99',
        ],
        'conflicts' => [],
    ],
    'autoload' => [
        'psr-4' => [
            'Skom\\SkomSitepackage\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'clearCacheOnLoad' => true,
    'author' => 'Sven Kalbhenn',
    'author_email' => 'sven@skom.de',
    'author_company' => 'SKom',
    'version' => '10.0.0',
];
