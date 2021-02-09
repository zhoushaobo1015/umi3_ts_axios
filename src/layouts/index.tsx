import { getLocale, setLocale } from 'umi';
import { Button } from 'antd';
import '../reset.scss';
import './index.css';
import '../pages/config';

function BasicLayout(props) {

  const HandleChange = () => {
    let getLocales = getLocale();
    if (getLocales === "en-US") {
      setLocale('zh-CN', false);
    }else{
      setLocale('en-US', false);
    }
  }

  return (
    <div className="normal">
      <h1 className="title">Yay! Welcome to umi! <Button type="primary" onClick={HandleChange}>修改语言</Button></h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
