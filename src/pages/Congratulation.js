import React from 'react'

import Header from 'parts/Header'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import Success from 'parts/Congratulation/Success'
import Breadcrumb from 'components/Breadcrumb'
import Documents from 'parts/Document'

export default function Congratulation() {
    return (
        <Documents>
            <Header />
            <Breadcrumb list={[
                {url: "/", name:"Home"},
                {url: "/congratulation", name:"Success Checkout"}
            ]}/>
            <Success />
            <Sitemap />
            <Footer />
        </Documents>
    )
}
