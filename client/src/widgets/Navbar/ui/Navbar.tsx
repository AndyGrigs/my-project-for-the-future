import { useCallback, useState } from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import LogInIcon from "@/assets/log-in-03-svgrepo-com.svg?react";
import { Theme, useTheme } from "@/app/Theme/ui";
import { LoginModal } from "@/app/features/AuthByUserName";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const [theme] = useTheme();
  const isLightTheme = theme != Theme.DARK;

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
        About
      </AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/">
        Home
      </AppLink>

      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        <LogInIcon
          className={classNames(cls.login_icon, { isLightTheme }, [
            className,
            cls[theme],
          ])}
        />
      </Button>

      <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />

      <ThemeSwitcher />
    </div>
  );
};
