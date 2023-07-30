import React from "react";
import MainPageIntro from './intro'
import MainPageMission from "./mission";
import MainPageOurServices from "./our_services";
import MainPageOurCommunity from "./our_community";
import MainPageNewsFeed from "./news_feed";
import MainPagePartners from "./partners";

export default class MainPage extends React.Component<any, any> {
  render() {
    return (
      <>
        <MainPageIntro />
        <MainPageMission />
        <MainPageOurServices />
        <MainPageOurCommunity />
        <MainPageNewsFeed />
        <MainPagePartners />
      </>
    );
  }
}
