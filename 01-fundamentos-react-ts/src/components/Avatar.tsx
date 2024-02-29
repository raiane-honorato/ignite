import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  //HTMLImageElement interface global
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = true, ...imageProps }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      {...imageProps}
    ></img>
  );
}
