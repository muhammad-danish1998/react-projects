"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleBtn() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      className={`h-screen w-full flex justify-center items-center ${
        enabled ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group relative inline-flex h-10 w-24 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
      >
        <span className="sr-only">Use setting</span>
        <span className="pointer-events-none relative inline-block size-9 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-14">
          <span
            aria-hidden="true"
            className="absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out"
          >
            
            <p className="text-black">ON</p>
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-[checked]:opacity-100 group-data-[checked]:duration-200 group-data-[checked]:ease-in"
          >
            <p className="text-black">OFF</p>
          </span>
        </span>
      </Switch>
    </div>
  );
}
