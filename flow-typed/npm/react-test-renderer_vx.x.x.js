// flow-typed signature: b39646fcd6b54764b610c38b101a4fdd
// flow-typed version: <<STUB>>/react-test-renderer_v^16.0.0/flow_v0.59.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'react-test-renderer'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

type TestRendererOptions = {
  createNodeMock: (element: React$Element<any>) => any
}

type ReactTestRendererJSON = {|
  type: string,
  props: { [propName: string]: any },
  children: null | Array<ReactTestRendererNode>,
  $$typeof?: Symbol // Optional because we add it with defineProperty().
|}

declare module 'react-test-renderer' {
  declare module.exports: {
    create: (
      element: React$Element<any>,
      options?: TestRendererOptions
    ) => {
      toJSON: () => ReactTestRendererJSON,
      update: (newElement: React$Element<any>) => void,
      unmount: () => void,
      toTree: () => any,
      getInstance: () => any,
      root: any
    }
  }
}