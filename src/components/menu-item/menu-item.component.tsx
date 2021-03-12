import { DirectorySection } from "../directory/directory.component";
import "./menu-item.styles.scss";

export type MenuItemProps = Pick<
  DirectorySection,
  "title" | "imageUrl" | "size"
>;

export const MenuItem = ({ title, imageUrl, size }: MenuItemProps) => (
  <div className={`${size} menu-item`}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}/>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
