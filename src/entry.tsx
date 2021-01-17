import React from 'react';
import ReactDOM from 'react-dom';

declare global {
  interface Window {
    buildSubModule: Function;
  }
}

function buildSubModule({ elTarget, component }: { elTarget: string; component: JSX.Element }) {
  const entryPoint = document.querySelector(elTarget);

  ReactDOM.render(component, entryPoint);
}

const PostNavigation: React.FC = () => {
  return <div>To DO</div>;
};

buildSubModule({ elTarget: '#app', component: <PostNavigation /> });

window.buildSubModule = buildSubModule;
