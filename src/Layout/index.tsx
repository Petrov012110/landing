import React from 'react';
import { Fooret } from '../components/Footer';
import Header from '../components/Header';
import './index.less';

export const Layout: React.FC = ({ children }) => {

    return (
        <section className="layout">
            <section className="header">
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"></link>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" ></link>
                <Header />
            </section>
            <section className="content">
                {children}
            </section>
            <section className="footer">
                <Fooret />
            </section>
        </section>
    )
}