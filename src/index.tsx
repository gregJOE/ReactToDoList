import React from "react";
import { createRoot, Root } from 'react-dom/client';

import TodoApp from "./app";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(<TodoApp />);