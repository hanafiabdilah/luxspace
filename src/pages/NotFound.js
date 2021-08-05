import React from 'react'

import Header from 'components/Header'
import Sitemap from 'components/Sitemap'
import Footer from 'components/Footer'
import NotFoundMessage from 'parts/NotFound/NotFoundMessage'


export default function NotFound() {
    return (
        <>
            <Header theme="black"/>
            <NotFoundMessage />
            <Sitemap />
            <Footer />
        </>
    )
}
