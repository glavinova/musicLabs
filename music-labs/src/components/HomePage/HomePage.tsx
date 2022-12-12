import React, { useContext, useEffect } from "react";
import appConstants from "../../constants/app-constants";
import AppContext from "../../context/app-context";
import ListGridItems from "../GridItem/ListGridItems";
import MainFeaturedPost from "../MainFeaturedPost/MainFeaturedPost";

export default function HomePage() {
  const appCtx = useContext(AppContext);
  useEffect(() => {
    appCtx.setCurrentUrl("/");
  });

  return (
    <React.Fragment>
      <MainFeaturedPost post={appConstants.mainFeaturedPost} />
      <ListGridItems />
    </React.Fragment>
  );
}
