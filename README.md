
### React例子[React例子[Jquery-BootStrap]

## 使用
```js
//--content-base：指定了serve的文件目录
//--inline：自动刷新使用inline模式
//--hot:自动添加热替换plugin
webpack-dev-server --content-base build --inline --hot
```
或者

```js
npm run dev
```

## 在React中使用Jquery,BootStrap
Jquery通过ref来引用指定的DOM元素

```
//在绑定DOM元素之后设置
componentDidMount(){
	//引用指定DOM元素启用模态对话框
	$(this.refs.root).modal({
		backdrop:'static',
		show:false,
		keyboard:false
	});
}
```