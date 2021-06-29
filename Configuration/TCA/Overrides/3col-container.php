<?php
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            '3col-container',
            '3 Column Container',
            'Insert an element dividing the content area into three columns',
            [
                [
                    ['name' => 'Left Column', 'colPos' => 201],
                    ['name' => 'Middle Column', 'colPos' => 202],
                    ['name' => 'Right Column', 'colPos' => 203]
                ]
            ]
        )
    )
    ->setIcon('EXT:container/Resources/Public/Icons/container-3col.svg')
);
