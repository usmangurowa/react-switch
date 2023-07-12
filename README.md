# React Switch

[![npm version](https://img.shields.io/npm/v/react-switch.svg)](https://www.npmjs.com/package/react-switch)

[![license](https://img.shields.io/npm/l/react-switch.svg)](https://github.com/your-username/react-switch/blob/master/LICENSE)

React Switch is a customizable switch component for React applications.

## Installation

Install the package using npm:

```shell
npm install @usmangurowa/react-switch
```

Install the package using yarn:

```shell
yarn add @usmangurowa/react-switch
```

## Usage

Here's a basic example of how to use `@usmangurowa/react-switch`:

```jsx
import React from "react";
import { Switch, Case } from "@usmangurowa/react-switch";

const App = () => {
  const condition = true;
  return (
    <Switch case={condition.toString()}>
      <Case when="true">
        <h1>This is displayed when the condition is true</h1>
      </Case>
      <Case when="false">
        <h1>This is displayed when the condition is false</h1>
      </Case>
    </Switch>
  );
};

export default App;
```

## API

### Switch

The `Switch` component renders the first matching `Case` component based on the provided condition.

**Props:**

- `case` (optional): The condition to match against. Accepts a string.
- `children`: The `Case` components to render.

### Case

The `Case` component represents a case within the `Switch` component.

**Props:**

- `when` (optional): The condition to match against. Accepts a string.
- `case` (optional): Same thing as `when`.
- `component` (optional): A custom component to render when the condition matches.
- `children`: The content to render when the condition matches.

## Examples

### Example 1: Toggle Switch

```jsx
import React, { useState } from "react";
import { Switch, Case } from "@usmangurowa/react-switch";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <Switch case={isOn}>
      <Case when={true}>
        <button onClick={handleToggle}>ON</button>
      </Case>
      <Case when={false}>
        <button onClick={handleToggle}>OFF</button>
      </Case>
    </Switch>
  );
};

export default ToggleSwitch;
```

### Example 2: User Role Switch

```jsx
import React, { useState } from "react";
import { Switch, Case } from "@usmangurowa/react-switch";

const UserRoleSwitch = () => {
  const [userRole, setUserRole] = useState("user");

  const handleChangeUserRole = (role) => {
    setUserRole(role);
  };

  return (
    <Switch case={userRole}>
      <Case when="admin">
        <button onClick={() => handleChangeUserRole("user")}>
          Switch to User
        </button>
      </Case>
      <Case when="user">
        <button onClick={() => handleChangeUserRole("admin")}>
          Switch to Admin
        </button>
      </Case>
    </Switch>
  );
};

export default UserRoleSwitch;
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
