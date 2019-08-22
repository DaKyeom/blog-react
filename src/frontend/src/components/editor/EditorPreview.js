import React from 'react';
import './EditorPreview.scss';
import { MarkdownRender } from '../common';

const EditorPreview = ({ markdown, title}) => (
    <div className='editor-preview'>
        <h1 className='title'>{title}</h1>
        <div>
            <MarkdownRender markdown={markdown} />
        </div>
    </div>
)

export default EditorPreview;
