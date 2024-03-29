import * as ContribPreact from 'preact';

declare global {
  const KalturaPlayer: {
    ui: {
      EventType: Record<string, string>;
      redux: {
        connect: (...args: any) => any;
      };
      reducers: Record<string, {actions: Record<string, unknown>[]}>;
      preact: typeof ContribPreact;
      utils: {
        getLogger: (name: string) => KalturaPlayerTypes.Logger;
        bindActions(actions: Record<string, unknown>[]): (...args: any) => void;
      };
      components: {
        withPlayer: any;
      };
    };
    core: {
      registerPlugin(name: string, component: any): void;
      BasePlugin: {
        new (...args: any[]): KalturaPlayerTypes.BasePlugin;
      };
      BaseMiddleware: {
        new (): KalturaPlayerTypes.BaseMiddleware;
      };
      utils: {
        Object: {
          mergeDeep(
            target: Record<string, any>,
            ...sources: Record<string, any>[]
          );
        };
      };
    };
  };
}
