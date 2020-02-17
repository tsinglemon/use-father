# use-father
开发组件库的基础环境

## 开发环境的使用
* `git clone git@github.com:tsinglemon/use-father.git`
* 如果只是想用这个环境，可以把本身的`.git`替换成自己的`.git`
* `/src`下的文件夹分别为组件，最后通过`index.js`导出
*  组件里的`.mdx`文件用于写组件文档

## 使用组件（用于走通流程）

```js
import {Foo, Input} from 'use-father';

export default function () {
  return (
    <div>
      <Foo size="large">hello, world</Foo>
      <Input/>
    </div>
  
  );
}
```
