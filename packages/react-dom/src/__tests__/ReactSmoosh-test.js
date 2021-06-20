/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

let React;
let ReactDOM;

describe('ReactSmoosh', () => {
  beforeEach(() => {
    React = require('react');
    ReactDOM = require('react-dom');
  });

  it('works', () => {
    function Dialog({ children }) {
      return (
        <div>
          <div>
            <div />
            <p>Hello</p>
          </div>
          <div>
            <div>
              {children}
            </div>
          </div>
        </div>
      )
    }

    function Button({ children }) {
      return (
        <button>
          {children}
        </button>
      )
    }

    function App() {
      return (
        <div>
          <div>
            <div>
              <div />
            </div>
            <Dialog>
              <Button>
                Click Me
              </Button>
            </Dialog>
          </div>
        </div>
      )
    }


    const container = document.createElement("div");
    ReactDOM.render(
      <div>
        <div>This is a good div.</div>
        <React.SmooshMode>
          <App />
        </React.SmooshMode>
      </div>
      ,
      container
    );

    console.log(container.innerHTML);

    expect(container.innerHTML).toBe(
      '<div><div>This is a good div.</div><p>Hello</p><button>Click Me</button></div>'
    )
  })

});