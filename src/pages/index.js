import './index.scss';
import { useIntl } from 'umi';
export default function () {
  const intl = useIntl(); // 函数式组件调用汉化

  return (
    <div className="normal">
      <div className="welcome" />
      <ul className="list">
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <a href="/demo">demo</a>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {intl.formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
    </div>
  );
}
