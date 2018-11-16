import { Component } from 'react';
import SidebarItem from './SidebarItem';

export default class extends Component {
  scrollToActiveItem = activeItem => {
    if (activeItem !== null) {
      activeItem.scrollIntoView();
    }
  };

  render() {
    const { id, text, childExamples, activeItemId } = this.props;

    return (
      <nav className="container">
        <h3 className="header">{text}</h3>
        {childExamples && (
          <ul className="examples-container">
            {childExamples.map(example => {
              const isActive = example.id === activeItemId;

              return (
                <li
                  className={`example ${example.id}`}
                  ref={isActive ? this.scrollToActiveItem : null}
                  key={example.id}
                >
                  <SidebarItem
                    text={example.name}
                    isActive={isActive}
                    href={`/?exampleId=${id + '|' + example.id}`}
                    as={`/examples/${id}/${example.id}`}
                  />
                </li>
              );
            })}
          </ul>
        )}
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
          }
          .header {
            font-size: 15px;
            padding-left: 25px;
          }
          .examples-container {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            margin-top: 3px;
            overflow-y: auto;
            padding-left: 60px;
          }
          li {
            padding: 0;
          }
          ul {
            list-style: none;
          }
          ul > li:before {
            content: '';
            height: 1em;
            width: 1em;
            display: block;
            float: left;
            margin-left: -1.5em;
            padding-top: 15px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100%;
            background-image: url('../static/doc-512.png');
          }
        `}</style>
      </nav>
    );
  }
}
