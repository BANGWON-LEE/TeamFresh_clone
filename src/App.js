import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DeliveryPage from './page/businessIntro/DeliveryPage';
import FreightPage from './page/businessIntro/FreightPage';
import GroceryPage from './page/businessIntro/GroceryPage';
import FulfillmentPage from './page/businessIntro/FulfillmentPage';
import CompanyIntroPage from './page/companyIntro/CompanyIntroPage';
import CustomerIntroPage from './page/companyIntro/CustomerIntroPage';
import LocationIntroPage from './page/companyIntro/LocationIntroPage';
import PartnersIntroPage from './page/companyIntro/PartnersIntroPage';
import MainPage from './page/MainPage'
import NoticePage from './page/notice/NoticePage';
import NoticeContentPage from './page/notice/NoticeContentPage'
import EmploymentPage from './page/notice/EmploymentPage';
import ServicePage from './page/notice/ServicePage';
import NewsPage from './page/news/NewsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={MainPage} path="/" />
        <Route exact component={CompanyIntroPage} path="/company/timf"/>
        <Route exact component={PartnersIntroPage} path="/company/partners"/>
        <Route exact component={CustomerIntroPage} path="/company/customer" />
        <Route exact component={LocationIntroPage} path="/company/location" />
        <Route exact component={DeliveryPage} path="/business/delivery" />
        <Route exact component={FreightPage} path="/business/freight" />
        <Route exact component={FulfillmentPage} path="/business/fulfillment" />
        <Route exact component={GroceryPage} path="/business/grocery" />
        <Route exact component={NoticePage} path="/notice/notice" />
        <Route exact component={NoticeContentPage} path="/notice/notice/:num" />
        <Route exact component={EmploymentPage} path="/notice/employment" />
        <Route exact component={ServicePage} path="/notice/service" />
        <Route exact component={NewsPage} path="/news" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
