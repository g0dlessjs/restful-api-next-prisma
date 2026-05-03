"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

const tabOptionsToColumns: { [key: number]: string } = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
};

export const TabBar = ({
  currentTab = 1,
  tabOptions = [1, 2, 3, 4, 5, 6, 7],
}: Props) => {
  const [selected, setSelected] = useState(currentTab);
  const router = useRouter();

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie("tab-selected", tab.toString());
    router.refresh();
  };

  return (
    <div
      className={`
        grid w-full space-x-2 rounded-xl bg-slate-800 p-2
        ${tabOptionsToColumns[tabOptions.length] ?? "grid-cols-4"}
        `}
    >
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input
            checked={selected === tab}
            onChange={() => {}}
            type="radio"
            id={tab.toString()}
            className="peer hidden"
          />
          <label
            onClick={() => onTabSelected(tab)}
            className="block cursor-pointer select-none rounded-xl p-2 text-center text-slate-400 transition-all peer-checked:bg-linear-to-r peer-checked:from-sky-600 peer-checked:to-cyan-400 peer-checked:font-bold peer-checked:text-white"
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
