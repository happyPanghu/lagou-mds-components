##单选框。

## API

### Radio

| 参数           | 说明                                     | 类型       |  可选值 | 默认值 |
|----------------|------------------------------------------|------------|---------|--------|
| checked        | 指定当前是否选中                         | Boolean    |         | false  |
| defaultChecked | 初始是否选中                             | Boolean    |         | false  |
| value          | 根据 value 进行比较，判断是否选中        | String     |         | 无     |

### RadioGroup

单选框组合，用于包裹一组 `Radio`。

| 参数           | 说明                             | 类型              | 可选值 | 默认值 |
|----------------|----------------------------------|-------------------|--------|--------|
| onChange       | 选项变化时的回调函数             | Function(e:Event) | 无     | 无     |
| value          | 用于设置当前选中的值             | String            | 无     | 无     |
| defaultValue   | 默认选中的值                     | String            | 无     | 无     |


### 示例

1、基本用法

```jsx
const RadioGroup = Radio.Group;

class BasicDemo extends React.Component {
    state = {
         value: 1
    }
    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({value: e.target.value});
    }
    render(){
        return (
            <div>
                <RadioGroup onChange={this.onChange.bind(this)} value={this.state.value}>
                  <Radio key="a" value={1}>A</Radio>
                  <Radio key="b" value={2}>B</Radio>
                  <Radio key="c" value={3}>C</Radio>
                  <Radio key="d" value={4}>D</Radio>
                </RadioGroup>
            </div>
        )
    }
}

ReactDOM.render(<BasicDemo />,document.getElementById('root'));
```
2、RadioButton
```jsx
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
class BasicDemo extends React.Component {
    state = {
         value: 1
    }
    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({value: e.target.value});
    }
    render(){
        return (
            <div>
                <RadioGroup onChange={this.onChange.bind(this)} defaultValue="a">
                    <RadioButton value="a">杭州</RadioButton>
                    <RadioButton value="b" disabled>上海</RadioButton>
                    <RadioButton value="c">北京</RadioButton>
                    <RadioButton value="d">成都</RadioButton>
                </RadioGroup>
            </div>
        )
    }
}

ReactDOM.render(<BasicDemo />,document.getElementById('root'));
```
3、高级用法
```jsx
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
class BasicDemo extends React.Component {
    state = {
         value: 1
    }
    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({value: e.target.value});
    }
    render(){
        const radioStyle = {
          display: 'block',
          height: '30px',
          lineHeight: '30px',
        };
        return (
            <div>
                <RadioGroup onChange={this.onChange.bind(this)} value={this.state.value}>
                    <Radio style={radioStyle} key="a" value={1}>Option A</Radio>
                    <Radio style={radioStyle} key="b" value={2}>Option B</Radio>
                    <Radio style={radioStyle} key="c" value={3}>Option C</Radio>
                    <Radio style={radioStyle} key="d" value={4}>
                        More...
                        {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                    </Radio>
                </RadioGroup>
            </div>
        )
    }
}

ReactDOM.render(<BasicDemo />,document.getElementById('root'));
```
