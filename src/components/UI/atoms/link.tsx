import React from "react";
type LinkProps = {
  link: string;
  value: string;
};
const Link = ({ link, value }: LinkProps) => <a href={link}>{value}</a>;

export default Link;
