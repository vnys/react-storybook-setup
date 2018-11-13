import React from 'react'
import styled from 'styled-components'
import Barbar from 'batfink-barbar'
import PropTypes from 'prop-types'

const Foobar = styled.div`
    display: grid;
    grid-gap: 0.25rem;
    font-weight: 500;
    font-size: 1.125rem;
    background: deeppink;
    color: lime;
    border: 1px solid black;
    padding: 1rem;
`

const Component = ({ children }) => (
    <Foobar>
        <Barbar>{ children }</Barbar>
    </Foobar>
)

Component.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
}

export default Component
