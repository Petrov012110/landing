import React, { Suspense } from 'react';
import { RouteProps } from 'react-router-dom';
import { Spin } from 'antd';
import { Layout } from '../Layout';

const Item = React.lazy(() => import('../containers/Item'));
const HomePage = React.lazy(() => import('../containers/Landing'));
const SearchPage = React.lazy(() => import('../containers/Parser'));
const Page404 = React.lazy(() => import('../containers/Page404'));

type PageType = { name?: string } & RouteProps;

const Page: React.FC = ({ children }) => (
  <Suspense fallback={<Spin />}>
    <Layout>
      {children}
    </Layout>
  </Suspense>
)

export const paths: PageType[] = [
  {
    exact: true,
    path: '/',
    component: () => (
      <Page>
        <HomePage />
      </Page>
    ),
  },
  {
    exact: true,
    path: '/parser',
    component: () => (
      <Page>
        <SearchPage />
      </Page>
    ),
  },
  {
    exact: true,
    path: '/item',
    component: () => (
      <Page>
        <Item />
      </Page>
    ),
  },
  {
    exact: true,
    path: '*',
    component: () => (
      <Page>
        <Page404 />
      </Page>
    ),
  },
];