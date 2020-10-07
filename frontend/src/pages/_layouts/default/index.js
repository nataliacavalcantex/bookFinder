import React from 'react'
import Wrapper from './styles'
import Header from '../../../components/Header'
import PropTypes from 'prop-types'
export default function DefaultLayout({children}){
    return(
        <Wrapper>
            <Header></Header>
            {children}
        </Wrapper>
    )
}
DefaultLayout.propTypes={
    children: PropTypes.element.isRequired
}