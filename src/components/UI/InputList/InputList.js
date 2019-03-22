import React from 'react' 
import ReactListInput from 'react-list-input';
import {Input, Icon} from 'semantic-ui-react';
import './InputList.css';
 
const InputWrapper = ({value, onChange, type = 'text'}) =>
<Input className='InputList__input'   type={type} value={value}  onChange={e => onChange(e.target.value)} />
 
 
class InputList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: []
    }
  }
 
  Item ({decorateHandle, removable, onChange, onRemove, value}) {
    return (
      <div className='InputList__inputBox'>
        {/* {decorateHandle(<span style={{cursor: 'move'}}>x</span>)} */}
        <span
          className='InputList__icon'
          onClick={removable ? onRemove : x => x}
          style={{
            cursor: removable ? 'pointer' : 'not-allowed',
            color: removable ? 'black' : 'gray'
          }}><Icon name="delete" /></span>
        <InputWrapper value={value} onChange={onChange} />
      </div>
    )
  }
 
  StagingItem ({value, onAdd, canAdd, add, onChange}) {
    return (
      <div className='InputList__inputBox'>
        <span
            className='InputList__icon'
          onClick={canAdd ? onAdd : undefined}
          style={{
            color: canAdd ? 'black' : 'gray',
            cursor: canAdd ? 'pointer' : 'not-allowed'
          }}
        ><Icon name='add' /></span>
        <InputWrapper value={value} onChange={onChange} />
      </div>
    )
  }

  onChangeInputList = value => {
      this.setState({value});
      this.props.handleBenefits(value);
  }
 
  render () {
    return (
      <ReactListInput
        initialStagingValue=''
        onChange={this.onChangeInputList}
        maxItems={10}
        minItems={0}
        ItemComponent={this.Item}
        StagingComponent={this.StagingItem}
        value={this.state.value}
      />
    )
  }
}
 

export default InputList;
                        