import React from "react";

type CaseProps = {
  case?: string | boolean;
  when?: string | boolean;
  component?: React.ReactNode;
  children?: React.ReactNode;
  default?: boolean;
};

interface SwitchProps {
  case?: string | boolean;
  children?: React.ReactNode;
}

const Switch = ({ children, case: value }: SwitchProps) => {
  let componentToRender = null;

  React.Children.forEach(children, (child) => {
    child = child as React.ReactElement<CaseProps>;
    if ((child.props.case || child.props.when) === value) {
      componentToRender =
        child.props?.children || child.props?.component || null;
    }

    if (child.props.default && !componentToRender) {
      componentToRender =
        child.props?.children || child.props?.component || null;
    }
  });

  return <>{componentToRender}</>;
};

const Case = ({ children, component }: CaseProps) => (
  <>{children || component}</>
);

Switch.Case = Case;

export default Switch;

export { Switch, Case };
