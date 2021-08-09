import React from 'react'

import Header from 'parts/Header'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import NotFoundMessage from 'parts/NotFound/NotFoundMessage'
import Documents from 'parts/Document'


export default function NotFound() {
    return (
        <Documents>
            <Header theme="black"/>
            <NotFoundMessage />
            <Sitemap />
            <Footer />
        </Documents>
    )
}
