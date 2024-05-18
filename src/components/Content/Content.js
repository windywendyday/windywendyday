import './Content.less'
import React from 'react'
import PropTypes from 'prop-types';

export default function Content({ children }) {
    return (
        <div className='title'>
            {children}
        </div>
    )
}

Content.propTypes = {
    children: PropTypes.object.isRequired
}