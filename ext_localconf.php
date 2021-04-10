<?php
defined('TYPO3') || die();

/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['skom_sitepackage'] = 'EXT:skom_sitepackage/Configuration/RTE/Default.yaml';

/**********
 * Backend Logos
 */
$GLOBALS['TYPO3_CONF_VARS']['EXTENSIONS']['backend']['loginLogo'] = 'EXT:skom_sitepackage/Resources/Public/Images/Backend/Logo_machwerk.svg';
$GLOBALS['TYPO3_CONF_VARS']['EXTENSIONS']['backend']['backendLogo'] = 'EXT:skom_sitepackage/Resources/Public/Images/Backend/Logo_machwerk_klein.svg';

/***************
 * PageTS
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . 'skom_sitepackage' . '/Configuration/TsConfig/Page/All.tsconfig">');
