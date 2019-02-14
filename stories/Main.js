/* eslint-disable semi */
/* eslint-disable no-unused-expressions */
import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Component', module);

stories.add('Just title', () => (
    <FullHeader
        title="TDD"
    />
)).add('Just title and subtitle', () => (
    <FullHeader
        title="TDD"
        subtitle="subtitle"
    />
));

