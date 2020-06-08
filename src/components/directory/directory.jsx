import React from 'react';
import './directory.scss';

import { selectSections } from '../../redux/directory/directory.selectors'

import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import MenuItem from '../../components/menu-item/menu-item';


const Directory = ({ sections }) => (
  <div className="directory-menu">
    { sections.map(({id, linkUrl,...otherSectionProps}) =>(
        <MenuItem key= {id} linkUrl={linkUrl} {...otherSectionProps} >

          <Link className='link' to={linkUrl} />
        </MenuItem>
    )
    ) }
  </div>       
)

const mapStateToProps = createStructuredSelector(
  { sections: selectSections }
)

export default connect(mapStateToProps)(Directory)