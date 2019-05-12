import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { BackgroundVariant } from '../../lib/theme/variants';

import { AccordionItem, TabItem } from './elements';
import { combineReducers, single, preventClose } from './reducers';
import Accordion from './accordion';
import Card from '../../atoms/card';

const items = [
    {
        title: 'Horses',
        contents: (
            <div>
                <img src="http://fillmurray.com/130/100" />
                <p>
                    Horses can sleep both lying down and standing up. Domestic horses have a
                    lifespan of around 25 years. A 19th century horse named 'Old Billy' is
                    said to have lived 62 years.
                </p>
            </div>
        ),
    },
    {
        title: 'Rhino',
        contents: (
            <div>
                <img src="http://fillmurray.com/100/100" />
                <p>
                   Rhino skin maybe thick but it can be quite sensitive to sunburns and
                 insect bites which is why they like wallow so much – when the mud dries
                 it acts as protection from the sunburns and insects.
                </p>
                
            </div>
        ),
    },
    {
        title: 'Unicorn',
        contents: (
            <div>
                <img src="http://fillmurray.com/g/100/100" />
                <p>
                     If you’re looking to hunt a unicorn, but don’t know where to begin, try
               Lake Superior State University in Sault Ste. Marie, Michigan. Since
               1971, the university has issued permits to unicorn questers.
                </p>
               
            </div>
        ),
    },
]

storiesOf('Controls/Accordion', module)
    .add('simple accordion', () => (
        <Accordion>
            {({ openIndexes, handleItemClick }) => (
                <div style={{ width: '500px'}}>
                    {items.map((item, index) => {
                        const isOpen = openIndexes.includes(index);
                        return (
                            <div key={item.title}>
                                <Card display="block" variant={BackgroundVariant.Primary} borderRadius={0} onClick={() => handleItemClick(index)}>
                                    {item.title}
                                </Card>
                                <AccordionItem pose={isOpen ? 'open' : 'closed'}>
                                    <Card>{item.contents}</Card>
                                </AccordionItem>
                            </div>
                        );
                    })}
                </div>
            )}
        </Accordion>
    ))
    .add('single item accordion', () => {
        const reducers = combineReducers(single);
        return (
             <Accordion stateReducer={reducers}>
                {({ openIndexes, handleItemClick }) => (
                    <div style={{ width: '500px'}}>
                        {items.map((item, index) => {
                            const isOpen = openIndexes.includes(index);
                            return (
                                <div key={item.title}>
                                    <Card display="block" variant={BackgroundVariant.Primary} borderRadius={0} onClick={() => handleItemClick(index)}>
                                        {item.title}
                                    </Card>
                                    <AccordionItem pose={isOpen ? 'open' : 'closed'}>
                                        <Card>{item.contents}</Card>
                                    </AccordionItem>
                                </div>
                            );
                        })}
                    </div>
                )}
            </Accordion>
        );
    })
    .add('tab', () => {
        const reducers = combineReducers(single, preventClose);
        return (
            <Accordion stateReducer={reducers}>
                {({ openIndexes, handleItemClick }) => (
                    <div style={{ width: '500px' }}>
                        <div style={{ display: 'flex' }}>
                            {items.map((item, index) => (
                                <Card display="block" width="auto" variant={BackgroundVariant.Primary} borderRadius={0} onClick={() => handleItemClick(index)}>
                                    {item.title}
                                </Card>
                            ))}
                        </div>
                        {items.map((item, index) => {
                            const isOpen = openIndexes.includes(index);
                            return (
                                <div key={item.title} style={{ position: 'relative' }}>
                                    <TabItem pose={isOpen ? 'leftOpen' : 'leftClosed'}>
                                        <Card>{item.contents}</Card>
                                    </TabItem>
                                </div>
                            );
                        })}
                    </div>
                )}
            </Accordion>
        )
    })
    .add('tab controls right', () => {
        const reducers = combineReducers(single, preventClose);
        return (
            <Accordion stateReducer={reducers}>
                {({ openIndexes, handleItemClick }) => (
                    <div style={{ width: '600px', display: 'flex' }}>
                        <div style={{ flex: 3 }}>
                        {items.map((item, index) => {
                            const isOpen = openIndexes.includes(index);
                            return (
                                <div key={item.title}>
                                    <AccordionItem pose={isOpen ? 'open' : 'closed'}>
                                        <Card>{item.contents}</Card>
                                    </AccordionItem>
                                </div>
                            );
                        })}
                        </div>
                        <div style={{ flex: 1 }}>
                            {items.map((item, index) => (
                                <Card display="block" variant={BackgroundVariant.Primary} borderRadius={0} onClick={() => handleItemClick(index)}>
                                    {item.title}
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </Accordion>
        )
    })