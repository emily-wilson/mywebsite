import React from 'react'
import PropTypes from 'prop-types'
import styles from './EmbedTechTag.module.css'

function EmbedTechTag ({node}) {
  const {names, imageLinks} = node
  if (!names || !imageLinks) {
    return undefined
  }

  const _names = names.split(',')
  const _imageLinks = imageLinks.split(',')

  if (_names.length !== _imageLinks.length) {
    return undefined
  }

  const tags = []
  for (let i = 0; i < _names.length; i++) {
    tags.push({
      name: _names[i],
      imageLink: _imageLinks[i]
    })
  }

  return (
    <div className={styles.techTags}>
      {tags.map(tag => (
        <div className={styles.tag}>
          <img className={styles.techLogo} src={tag.imageLink} />
          {tag.name}
        </div>
      ))}
    </div>
  )
}

EmbedTechTag.propTypes = {
  node: PropTypes.shape({
    names: PropTypes.string,
    imageLinks: PropTypes.string
  })
}
export default EmbedTechTag
