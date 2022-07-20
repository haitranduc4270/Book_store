// https://umijs.org/config/
import { defineConfig } from 'umi'
import defaultSettings from './defaultSettings'
import proxy from './proxy'
const { REACT_APP_ENV } = process.env
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'browser',
  },
  locale: {
    default: 'vi-VN',
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '@/layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '@/layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              path: '/user/login',
              component: '@/pages/user/login',
            },
            {
              name: 'login',
              path: '/user/login-2fa',
              component: '@/pages/user/login-2fa',
            },
            {
              name: 'forgot',
              path: '/user/forgot',
              component: '@/pages/user/forgot',
            },
            {
              name: 'change',
              path: '/user/change',
              component: '@/pages/user/change',
            },
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '@/layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          routes: [
            {
              path: '/',
              redirect: '/dashboard',
            },
            {
              path: '/dashboard',
              name: 'dashboard',
              icon: 'DashboardOutlined',
              component: '@/pages/dashboard',
            },
            {
              path: '/members',
              name: 'members',
              icon: 'TeamOutlined',
              routes: [
                {
                  path: '/members',
                  component: '@/pages/members',
                  exact: true,
                },
                {
                  path: '/members/profile',
                  component: '@/pages/members/components/Profile',
                  exact: true,
                },
              ],
            },
            {
              path: '/projects',
              name: 'projects',
              icon: 'ProjectOutlined',
              component: '@/pages/projects',
            },
            // {
            //   name: 'reports',
            //   icon: 'FileTextOutlined',
            //   path: '/reports',
            //   routes: [
            //     {
            //       name: 'onsite',
            //       path: '/reports/onsite',
            //       component: '@/pages/reports/onsite',
            //     },
            //     {
            //       name: 'ot',
            //       path: '/reports/ot',
            //       component: '@/pages/reports/ot',
            //     },
            //   ],
            // },
            // {
            //   path: '/salary',
            //   name: 'salary',
            //   icon: 'TableOutlined',
            //   component: '@/pages/salary',
            // },
            // {
            //   path: '/setting',
            //   name: 'setting',
            //   icon: 'TableOutlined',
            //   component: '@/pages/setting',
            // }
          ],
        },
      ],
    },
  ],
  theme: {
    'primary-color': '#3da9fc',
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  exportStatic: {},
  esbuild: {},
})
