import React from 'react'

import Header from 'parts/Header'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
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
