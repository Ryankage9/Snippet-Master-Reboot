import React from 'react'
import { isAuth } from '../../actions/auth'
import Layout from '../../Components/Layout'
import MainContent from '../../Components/MainContent/MainContent'
import Tags from '../../Components/Tags/Tags'

isAuth
function index() {
    return (
        <Layout>
            <MainContent>
                <h1>
                    This page is still under construction
                </h1>
            </MainContent>
        </Layout>
    )
}

export default index