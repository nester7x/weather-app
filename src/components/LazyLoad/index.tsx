import React, { lazy, Suspense, ComponentProps } from 'react';

const Loading = () => <>Loading...</>;

const lazyLoad = <Props extends ComponentProps<any>>(
  factory: () => Promise<{ default: React.ComponentType<Props> }>,
  fallback = <Loading />,
): React.ComponentType<Props> & { preload: () => Promise<void> } => {
  const LazyComponent = lazy(factory);
  let PreloadedComponent: React.ComponentType<Props> | undefined;
  let factoryPromise: Promise<void> | undefined;

  const Component = (props: any): React.ReactElement => {
    const LoadedComponent = LazyComponent || PreloadedComponent;

    return (
      <Suspense fallback={fallback}>
        <LoadedComponent {...props} />
      </Suspense>
    );
  };

  Component.preload = (): Promise<void> => {
    if (!factoryPromise) {
      factoryPromise = factory().then((module) => {
        PreloadedComponent = module.default;
      });
    }

    return factoryPromise;
  };

  return Component;
};

export default lazyLoad;
