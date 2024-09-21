import React, { Component, Fragment, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Loading from '../components/Loading';

export class HomePage extends Component {
    render() {
        return (
            <Suspense fallback={<Loading />}>
                <Fragment>
                    <Navbar />
                    <Hero />
                </Fragment>
            </Suspense>
        );
    }
}

export default HomePage;
