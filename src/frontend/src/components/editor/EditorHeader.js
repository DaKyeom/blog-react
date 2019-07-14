import  React from 'react';
import './EditorHeader.scss';

import Button from '@material-ui/core/Button';

const EditorHeader = ({onBack, onSubmit }) => {
    return(
        <div className='editor-header'>
         <div className='back'>
             <Button
                onClick={onBack} color="secondary" variant="contained">뒤로가기</Button>
         </div>
         <div className='submit'>
             <Button onClick={onSubmit} color="primary" variant="contained" >저장하기</Button>
         </div>
        </div>
    )
}

export default EditorHeader;

