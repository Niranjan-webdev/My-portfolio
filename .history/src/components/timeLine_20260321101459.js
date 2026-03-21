import React from 'react'
import { Chrono } from 'react-chrono';

function TimeLine() {
    console.log('wefjwnefkwbfi')
    const items = [
        {
            title: 'May 1940',
            cardTitle: 'Dunkirk',
            url: 'http://www.history.com',
            cardSubtitle:
                'Men of the British Expeditionary Force (BEF) wade out to a destroyer...',
            cardDetailedText:
                'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'http://someurl/image.jpg',
                },
            },
        },
        {
            title: 'May 1940',
            cardTitle: 'Dunkirk',
            url: 'http://www.history.com',
            cardSubtitle:
                'Men of the British Expeditionary Force (BEF) wade out to a destroyer...',
            cardDetailedText:
                'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'http://someurl/image.jpg',
                },
            },
        },
        {
            title: 'May 1940',
            cardTitle: 'Dunkirk',
            url: 'http://www.history.com',
            cardSubtitle:
                'Men of the British Expeditionary Force (BEF) wade out to a destroyer...',
            cardDetailedText:
                'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'http://someurl/image.jpg',
                },
            },
        }
    ];
    return (
        <div className='w-full h-screen'>
            <Chrono mode="VERTICAL" items={items} />
        </div>
    )
}

export default TimeLine
