// Show cloud-save failures instead of silently treating them as success.
window.addEventListener('pixelbless-save-error', () => {
  if (!sessionStorage.getItem('pixelbless-save-warning-shown')) {
    sessionStorage.setItem('pixelbless-save-warning-shown', '1');
    window.alert('云端保存失败。当前修改可能只保存在此设备，请稍后重试并检查网络或联系网站管理员。');
  }
});
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
