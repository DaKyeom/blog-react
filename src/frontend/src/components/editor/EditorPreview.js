import React from 'react';
import './EditorPreview.scss';

const EditorPreview = ({ markdown, title}) => (
    <div className='editor-preview'>
        <h1 className='title'>제목</h1>
        <div>내용</div>
    </div>
)

export default EditorPreview;
