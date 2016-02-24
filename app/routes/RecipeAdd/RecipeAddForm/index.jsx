import React from 'react'
import { reduxForm } from 'redux-form'

class RecipeAddForm extends React.Component {
  render () {
    const {
      fields: { slug, title, subtitle },
      handleSubmit,
      submitting
    } = this.props
    return (
      <div className='row'>
        <form className='col s12 vertical-wrapper' onSubmit={handleSubmit(data => { console.log(data) })}>
          <div className='row'>
            <div className='input-field col s8 valign'>
              <input className='validate' id='slug' type='text' placeholder='URL' {...slug}/>
              <label htmlFor='slug'>Permalink</label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s8 valign'>
              <input className='validate' id='title' type='text' placeholder='Titel' {...title}/>
              <label htmlFor='title'>Titel</label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s8 valign'>
              <textarea
                className='materialize-textarea'
                id='subtitle'
                type='text'
                placeholder='Untertitel' {...subtitle}
              />
              <label htmlFor='subtitle'>Unterüberschrift</label>
            </div>
          </div>

          <div className='row'>
            <button className='btn waves-effect waves-light' type='submit' name='action'>
              Speichern
              <i className='material-icons right'>send</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

RecipeAddForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func,
  submitting: React.PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'RecipeAdd',
  fields: ['slug', 'title', 'subtitle'],
  getFormState: (state, reduxMountPoint) => state.get(reduxMountPoint).toJS()
})(RecipeAddForm)
