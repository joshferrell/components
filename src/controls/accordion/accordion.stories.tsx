import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import { AccordionItem } from './elements';
import Accordion from './accordion';

const items = [
    {
        title: '🐴',
        contents: (
            <div>
                Horses can sleep both lying down and standing up. Domestic horses have a
                lifespan of around 25 years. A 19th century horse named 'Old Billy' is
                said to have lived 62 years.
      </div>
        ),
    },
    {
        title: '🦏',
        contents: (
            <div>
                Rhino skin maybe thick but it can be quite sensitive to sunburns and
                insect bites which is why they like wallow so much – when the mud dries
                it acts as protection from the sunburns and insects.
      </div>
        ),
    },
    {
        title: '🦄',
        contents: (
            <div>
                If you’re looking to hunt a unicorn, but don’t know where to begin, try
                Lake Superior State University in Sault Ste. Marie, Michigan. Since
                1971, the university has issued permits to unicorn questers.
      </div>
        ),
    },
]

storiesOf('Controls/Accordion', module)
    .add('simple accordion', () => (
        <Accordion>
            {({ openIndexes, handleItemClick }) => (
                <div>
                    {items.map((item, index) => {
                        const isOpen = openIndexes.includes(index);
                        return (
                            <div>
                                <button key={item.title} onClick={() => handleItemClick(index)}>
                                    {item.title}
                                </button>
                                <AccordionItem pose={isOpen ? 'open' : 'closed'}>
                                    {item.contents}
                                </AccordionItem>
                            </div>
                        );
                    })}
                </div>
            )}
        </Accordion>
    ))