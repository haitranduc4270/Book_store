// @ts-nocheck
import { Component } from 'react';
import { ApplyPluginsType } from 'umi';
import dva from 'dva';
// @ts-ignore
import createLoading from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/node_modules/dva-loading/dist/index.esm.js';
import { plugin, history } from '../core/umiExports';
import ModelSetting0 from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/src/models/setting.ts';
import ModelModel1 from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/src/pages/members/components/Profile/model.ts';
import ModelModel2 from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/src/pages/members/model.ts';
import ModelModel3 from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/src/pages/projects/model.ts';
import ModelModel4 from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/src/pages/reports/onsite/model.ts';
import ModelModel5 from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/src/pages/reports/ot/model.ts';
import ModelModel6 from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/src/pages/salary/model.ts';
import ModelModel7 from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/src/pages/setting/model.ts';
import ModelModel8 from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/src/pages/user/change/model.ts';
import ModelModel9 from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/src/pages/user/forgot/model.ts';
import ModelModel10 from '/home/tranhuuhuy297/Projects/hust/cnweb/ltw_fe_admin/src/pages/user/login/model.ts';

let app:any = null;

export function _onCreate(options = {}) {
  const runtimeDva = plugin.applyPlugins({
    key: 'dva',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    // @ts-ignore
    ...(typeof window !== 'undefined' && window.g_useSSR ? { initialState: window.g_initialProps } : {}),
    ...(options || {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach((plugin:any) => {
    app.use(plugin);
  });
  app.model({ namespace: 'setting', ...ModelSetting0 });
app.model({ namespace: 'model', ...ModelModel1 });
app.model({ namespace: 'model', ...ModelModel2 });
app.model({ namespace: 'model', ...ModelModel3 });
app.model({ namespace: 'model', ...ModelModel4 });
app.model({ namespace: 'model', ...ModelModel5 });
app.model({ namespace: 'model', ...ModelModel6 });
app.model({ namespace: 'model', ...ModelModel7 });
app.model({ namespace: 'model', ...ModelModel8 });
app.model({ namespace: 'model', ...ModelModel9 });
app.model({ namespace: 'model', ...ModelModel10 });
  return app;
}

export function getApp() {
  return app;
}

/**
 * whether browser env
 * 
 * @returns boolean
 */
function isBrowser(): boolean {
  return typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
}

export class _DvaContainer extends Component {
  constructor(props: any) {
    super(props);
    // run only in client, avoid override server _onCreate()
    if (isBrowser()) {
      _onCreate()
    }
  }

  componentWillUnmount() {
    let app = getApp();
    app._models.forEach((model:any) => {
      app.unmodel(model.namespace);
    });
    app._models = [];
    try {
      // 释放 app，for gc
      // immer 场景 app 是 read-only 的，这里 try catch 一下
      app = null;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    let app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
