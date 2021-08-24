<?php
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            'section-container',
            'Section Container',
            'Insert an element dividing the content area into a new section',
            [
                [
                    ['name' => 'Section', 'colPos' => 201]
                ]
            ]
        )
    )
    ->setIcon('EXT:container/Resources/Public/Icons/container-1col.svg')
);
