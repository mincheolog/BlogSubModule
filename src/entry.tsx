import React from 'react';
import ReactDOM from 'react-dom';

import PostNavigation from '@modules/PostNavigation';
import HistoryViewer from '@modules/HistoryViewer';

declare global {
  interface Window {
    buildSubModule: Function;
  }
}

function buildSubModule({ elTarget, component }: { elTarget: string; component: JSX.Element }) {
  const entryPoint = document.querySelector(elTarget);
  console.log(entryPoint)
  
  if(!entryPoint) {
    return;
  }

  ReactDOM.render(component, entryPoint);
}

buildSubModule({ elTarget: '#app', component: <PostNavigation /> });
buildSubModule({ elTarget: '#history', component: <HistoryViewer /> });

window.buildSubModule = buildSubModule;
