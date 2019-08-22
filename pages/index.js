import React, { Component } from 'react';
import '../styles/styles.css';
import content from '../content/home.md';
// export default () => (
//   <div className='p-4 shadow rounded bg-white'>
//     <h1 className='text-purple leading-normal'>Next.js</h1>
//     <p className='text-grey-dark'>with Tailwind CSS</p>
//   </div>
// );

export default class Home extends Component {
  render() {
    let {
      html,
      attributes: { title, cats }
    } = content;
    return (
      <article className='p-4 shadow rounded bg-white'>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}
