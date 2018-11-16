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
            background-image: url("data:image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid meet'><linearGradient id='shimmer'><stop offset='0%' stop-color='goldenrod'/><stop offset='70%' stop-color='gold'/><stop offset='100%' stop-color='goldenrod'/></linearGradient><path d='M10,5 Q50,10 90,5 C95,60 100,50 60,75 C70,85 85,90 90,95 Q50,100 10,95 C15,90 30,85 40,75 C0,50 5,60 10,5 Q50,0 90,5 ' fill='url(%23shimmer)' stroke='brown' stroke-width='2'/></svg>");
          }
        `}</style>
      </nav>
    );
  }
}
