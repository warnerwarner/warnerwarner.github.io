import React from 'react';
import Fade from 'react-reveal/Fade';

function hideShowButton(attributeState) {
    if (attributeState == false) {
        return true
    }

    else {
        return false
    }
}

const Attribute = ({ index, website }) => (
    /**
     * A React component representing a publication.
     * 
     * name: the title of the publication,
     * authors: the authors of the publication,
     * journal: the journal of the publication,
     * image: the image corresponding to the publication.
     */


    <div className='attribute'>
        <div className='attributeText'>
            <p className='attributeIndex'>
                {index + '.'}
            </p>
            <p className='attributeWebsite'>
                {website}
            </p>
        </div>
    </div>
)

const Attributes = ({ attributes }) => {

    const initial_state = false;
    const state = React.useState(initial_state)
    const attributesState = state[0]
    const setAttributesState = state[1]

    return (
        <div className='attributes'>
            <div className='attributesButtonDiv'>
                <button className='attributesButton' onClick={() => setAttributesState(hideShowButton(attributesState))}>Attributes</button>
            </div>

            <Fade when={attributesState} collapse >
                <div className='attributesSection'>
                    <h1 className='attributesTitle'>
                        Attributes
                    </h1>
                    <hr className='hrStyleBlue'></hr>
                    <div className='attributeItems'>
                        {attributes.map(attribute => <Attribute {...attribute} />)}
                    </div>
                </div>
            </Fade>
        </div >

    )
}

export default Attributes;