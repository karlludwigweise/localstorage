# localstorage

A thin wrapper around the localStorage api

## Usage

```
yarn add @klw/localstorage
```

```
import { useLocalStorage } from "@klw/localstorage";

const storage = useLocalStorage();
storage.set("alive", true);
storage.get("alive", true);
```
