import React, {useEffect} from 'react'
import Header from 'components/Header'
import Clients from 'parts/HomePage/Clients'
import Sitemap from 'components/Sitemap'
import Footer from 'components/Footer'
import ProductDetail from 'parts/Details/ProductDetail'
import Suggestion from 'parts/Details/Suggestion'
import Breadcrumb from 'components/Breadcrumb'
import { useParams } from 'react-router-dom'

import useAsync from 'helpers/hooks/useAsync'
import fetch from 'helpers/fetch';

export default function HomePage() {
    
    const {id} = useParams();
    const {data, run, isLoading} = useAsync();
    useEffect(() => {
        run(fetch({ url: `/api/products/${id}` }));
      }, [run]);

    console.log(data);
    
    return (
        <>
            <Header theme="black"/>
            <Breadcrumb list={[
                { url: "/", name: "Home"},
                { url: "/categories/91231", name: "Office Room"},
                { url: "/categories/91231/products/7888", name: "Details" }
            ]} />
            <ProductDetail />
            <Suggestion />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}
