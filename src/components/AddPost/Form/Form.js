import React from 'react';
import TagList from '../../TagList/TagList';
import tags from '../../../data/tags';

export default function Form() {
  return (
    <form>
      <input placeholder="Name:" className="input-name"></input>
      <input placeholder="Title:" className="input-title"></input>
      <input placeholder="Link:" className="input-link"></input>
      <textarea placeholder="Descrition:" className="description" />
      <TagList tags={tags} />
      <button className="submit-button">Submit</button>
    </form>
  );
}
