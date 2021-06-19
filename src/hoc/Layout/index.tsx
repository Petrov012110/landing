import React from 'react';
import { Fooret } from '../../components/Footer';
import Header from '../../components/Header';
import Landing, { LandingProps, MY_CONST } from '../../containers/Landing';
import './index.less';

export function Layout() {

    return (
        <section className="layout">
            <section className="header">
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
                <Header />
            </section>
            <section className="content">
                <Landing />
            </section>
            <section className="footer">
                <Fooret />
            </section>
        </section>
    )
}