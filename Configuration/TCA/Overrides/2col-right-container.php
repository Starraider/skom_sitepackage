<?php
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            '2col-right-container',
            '2 Column right Container',
            'Insert an element dividing the content area into one small col right and one big col left',
            [
                [
                    ['name' => 'Left Column', 'colPos' => 201],
                    ['name' => 'Right Column', 'colPos' => 202]
                ]
            ]
        )
    )
    ->setIcon('EXT:container/Resources/Public/Icons/container-2col-right.svg')
);
