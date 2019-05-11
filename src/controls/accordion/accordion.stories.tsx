import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { BackgroundVariant } from '../../lib/theme/variants';

import { AccordionItem } from './elements';
import Accordion from './accordion';
import Card from '../../atoms/card';

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