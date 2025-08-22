import React, { useState } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames";
import ArrowRight from "@/assets/arrow-small-right-svgrepo-com.svg?react";
import ArrowLeft from "@/assets/arrow-small-left-svgrepo-com.svg?react";
import { useTheme } from "@/app/Theme/ui";
import { Theme } from "@/app/Theme/ui";

export interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [theme] = useTheme();
  const isLightTheme = theme != Theme.DARK;

  const toogle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      {collapsed ? (
        <ArrowRight
          onClick={toogle}
          className={classNames(cls.arrow, { isLightTheme }, [
            className,
            cls[theme],
          ])}
        />
      ) : (
        <ArrowLeft
          onClick={toogle}
          className={classNames(cls.arrow, { isLightTheme }, [
            className,
            cls[theme],
          ])}
        />
      )}
    </div>
  );
};
