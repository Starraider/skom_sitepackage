<?php

declare(strict_types=1);

/*
 * This file is part of the package bk2k/bootstrap-package.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

defined('TYPO3') or die('Access denied.');

// Adjust columns for generic usage
$GLOBALS['TCA']['tt_content']['columns']['frame_layout'] = [
    'exclude' => true,
    'displayCond' => 'FIELD:frame_class:!=:none',
    'label' => 'LLL:EXT:bootstrap_package/Resources/Private/Language/Backend.xlf:field.frame_layout',
    'config' => [
        'type' => 'select',
        'renderType' => 'selectSingle',
        'items' => [['default', 'default'], ['embedded', 'embedded'], ['no-gutter', 'no-gutter']],
    ],
    'l10n_mode' => 'exclude',
];
