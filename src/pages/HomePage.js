import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/HomePage/Hero'
import BrowseRoom from 'parts/HomePage/BrowseRoom'
import JustArrived from 'parts/HomePage/JustArrived'
import Clients from 'parts/HomePage/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'
import Documents from 'parts/Document'

export default function HomePage() {
    return (
        <Documents>
            <Header theme="white" position="absolute"/>
            <Hero />
            <BrowseRoom />
            <JustArrived />
            <Clients />
            <Sitemap isBorder="yes"/>
            <Footer />
        </Documents >
    )
}
