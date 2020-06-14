import React from 'react';
import './homepage.scss';
import HomePageContainer from './homepage.styled'

// import MenuItem from '../../components/menu-item/menu-item';
import Directory from '../../components/directory/directory'

const HomePage = () =>(
    <HomePageContainer className="homepage">
        <Directory>
        </Directory>
    </HomePageContainer>
)

export default HomePage;