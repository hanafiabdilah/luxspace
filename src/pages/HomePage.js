import React from 'react'
import Header from 'components/Header'
import Hero from 'parts/HomePage/Hero'
import BrowseRoom from 'parts/HomePage/BrowseRoom'
import JustArrived from 'parts/HomePage/JustArrived'
import Clients from 'parts/HomePage/Clients'
import Sitemap from 'components/Sitemap'
import Footer from 'components/Footer'
import useScrollAnchor from 'helpers/hooks/useScrollAnchor'
import useModalDOM from 'helpers/hooks/useModalDOM'

export default function HomePage() {
    useScrollAnchor();
    useModalDOM();
    return (
        <>
            <Header theme="white" position="absolute"/>
            <Hero />
            <BrowseRoom />
            <JustArrived />
            <Clients />
            <Sitemap isBorder="yes"/>
            <Footer />
        </>
    )
}
