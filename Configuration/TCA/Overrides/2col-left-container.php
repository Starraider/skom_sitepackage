<?php
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
    (
        new \B13\Container\Tca\ContainerConfiguration(
            '2col-left-container',
            '2 Column left Container',
            'Insert an element dividing the content area into one small col left and one big col right',
            [
                [
                    ['name' => 'Left Column', 'colPos' => 201],
                    ['name' => 'Right Column', 'colPos' => 202]
                ]
            ]
        )
    )
    ->setIcon('EXT:container/Resources/Public/Icons/container-2col-left.svg')
);
