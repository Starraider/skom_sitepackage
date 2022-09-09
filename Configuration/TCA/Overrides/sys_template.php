<?php

defined('TYPO3') || die();
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

call_user_func(function () {
    /**
     * Temporary variables
     */
    $extensionKey = 'skom_sitepackage';

    /**
     * Default TypoScript for SkomSitepackage
     */
    ExtensionManagementUtility::addStaticFile($extensionKey, 'Configuration/TypoScript', 'SKom Sitepackage');
});
