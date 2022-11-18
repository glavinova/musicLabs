import React from 'react';
import appConstants from '../../constants/app-constants';
import Header from '../../navigation/Header';
import ListGridItems from '../GridItem/ListGridItems';
import MainFeaturedPost from '../MainFeaturedPost';

export default function HomePage() {
  return (
    <React.Fragment>
        
    <Header />
    <MainFeaturedPost post={appConstants.mainFeaturedPost} />
    <ListGridItems />

    </React.Fragment>
  );
}