<?php
defined('TYPO3_MODE') || die();
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

call_user_func(function()
{
    /**
     * Temporary variables
     */
    $extensionKey = 'skom_sitepackage';

    /**
     * Default PageTS for SkomSitepackage
     */
    ExtensionManagementUtility::registerPageTSConfigFile(
        $extensionKey,
        'Configuration/TsConfig/Page/All.tsconfig',
        'SKom Sitepackage'
    );
});
