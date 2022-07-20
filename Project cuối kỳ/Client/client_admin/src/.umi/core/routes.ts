// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'@/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'@/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "login",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'@/pages/user/login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "login",
            "path": "/user/login-2fa",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login-2fa' */'@/pages/user/login-2fa'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "forgot",
            "path": "/user/forgot",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__forgot' */'@/pages/user/forgot'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "change",
            "path": "/user/change",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__change' */'@/pages/user/change'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'@/layouts/BasicLayout'), loading: LoadingComponent}),
        "Routes": [
          "src/pages/Authorized"
        ],
        "routes": [
          {
            "path": "/index.html",
            "redirect": "/dashboard",
            "exact": true
          },
          {
            "path": "/",
            "redirect": "/dashboard",
            "exact": true
          },
          {
            "path": "/dashboard",
            "name": "dashboard",
            "icon": "DashboardOutlined",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard' */'@/pages/dashboard'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/members",
            "name": "members",
            "icon": "TeamOutlined",
            "routes": [
              {
                "path": "/members",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__members' */'@/pages/members'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/members/profile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__members__components__Profile' */'@/pages/members/components/Profile'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/projects",
            "name": "projects",
            "icon": "ProjectOutlined",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__projects' */'@/pages/projects'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
