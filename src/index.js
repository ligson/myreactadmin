import dva from 'dva';
import {createBrowserHistory as createHistory} from 'history';

import './index.css';

// 1. Initialize
/**
 * @see https://www.jianshu.com/p/2e9e45e9a880
 * hashHistory 老版本浏览器的 history。
 * browserHistory h5的history。现在的 web 项目都使用这种。
 * memoryHistory node环境下的 history，存储在 memory中。
 * hashHistory 连续点击同一个链接会报错

 * 使用 hashHistory，连续点击一个链接会报错：Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack
 * but 使用 browserHistory 就不会出现这种情况。连续点击一个链接，第二次依然会有反应，但不会报错。
 *
 * 产生这种差异的原因是机制问题，hashHistory 制作一个栈来存放历史记录，且不允许连续两个历史记录相同。browserHistory 就允许连续两次历史记录相同。
 *
 * 测试：连续点击一个链接四次，再点击浏览器的后退按钮，看
 * hashHistory 与 browserHistory 的差别。
 * *
 * 还有一个差异：hashHistory 不能很好的支持 basename。
 *
 * @type {DvaInstance}
 */
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
