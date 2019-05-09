import React from 'react';

import { storiesOf } from '@storybook/react';

import Icon from './icon';
import { IconTypes, IconSize } from '../../lib/atoms/icon';

const IconGrid = () => (
    <div style={{ margin: 16 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 16 }}>
          {Object.keys(IconTypes).map(icon => (
            <button
              type="button"
              key={icon}
              title={icon}
              style={{
                fontSize: 15,
                padding: '1rem .5rem',
                margin: 0,
                border: 0,
                background: 'none',
                cursor: 'pointer',
                color: '#484848',
                textAlign: 'center',
                width: 90,
              }}
            >
            {/* 
            // @ts-ignore */}
              <Icon type={IconTypes[icon]} color={"#2b2b2"} size={IconSize.md} />
              <div style={{ fontSize: 11, marginTop: 4 }}>{icon}</div>
            </button>
          ))}
        </div>
    </div>
)

storiesOf('Atoms/Icon', module)
    .add('icon gallery', () => (
        <IconGrid />
    ))
    .add('with title', () => (
      <Icon type={IconTypes.BOOK} title="This is a book" />
    ));